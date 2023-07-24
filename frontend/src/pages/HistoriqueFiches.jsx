import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";

function HistoriqueFiches() {
  const { loggedInUser } = useUser();
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const grouped = {};
  selection.forEach((wine) => {
    const formattedDate = wine.workshopDate?.split("T")[0];
    if (!grouped[formattedDate]) {
      grouped[formattedDate] = [];
    }
    grouped[formattedDate].push(wine);
  });

  const groupedEntries = Object.entries(grouped);

  useEffect(() => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/allWinesWorkshops/${
      loggedInUser.id
    }`;
    axios
      .get(API)
      .then((res) => {
        setSelection(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return <p>Chargement</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl p-8 text-center">
        Historique des dégustations
      </h2>
      {groupedEntries.map(([date, wines]) => (
        <>
          <h3 className="p-3 text-lg">Dégustation du {date}</h3>
          <hr className="w-[250px] pb-12" />
          <div className="flex gap-14 flex-wrap justify-center">
            {wines.map((wine) => (
              <Link to={`/fiche/compterendu/${wine.id}`}>
                <div key={wine.id}>
                  {" "}
                  <img
                    className="object-cover w-[160px] h-[187px] rounded-t-xl"
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                      wine.wineImage
                    }`}
                    alt={wine.wineName}
                  />
                  <div className="bg-secondary text-primary text-center rounded-b-xl p-2 h-[108px] flex flex-col max-w-[160px] justify-center">
                    <h3>{wine.wineName}</h3>
                    <h4 className="text-tertiary">{wine.score || "N/A"}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ))}
      <Link to="/profil">
        <button className="mt-8" type="button">
          Retour profil
        </button>
      </Link>
    </div>
  );
}

export default HistoriqueFiches;
