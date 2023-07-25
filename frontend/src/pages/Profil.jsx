import { Link } from "react-router-dom";
import ClientInfoProfil from "@components/Profil/ClientInfoProfil";
import FicheDegustation from "@components/Profil/FicheDegustation";
import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";

function Profil() {
  const { loggedInUser } = useUser();
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/winesWorkshops/${
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
    <div>
      <div className="text-secondary p-[1.5rem] sm:px-[3.2rem] md:px-[6.4rem] min-[950px]:px-[7.5rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl pb-[2rem]">
            Bonjour {loggedInUser.firstname}
          </h2>

          <button type="button">
            <Link to="/profil/mes_recettes">Mes recettes</Link>
          </button>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:flex flex-col justify-center">
            <div className="profilTitle">
              <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
                Mes informations
              </h3>
            </div>
            <ClientInfoProfil
              email={loggedInUser.email}
              birthday={loggedInUser.birthday}
            />
            <Link to={`/profil/modifier/${loggedInUser.id}`}>
              <button type="button">Modifier</button>
            </Link>
          </div>
          <div className="lg:flex flex-col lg:w-[50%]">
            <div className="profilTitle">
              <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
                Mes fiches dégustation
              </h3>
            </div>
            <div className="pt-[1.5rem]">
              {selection.map((wine) => (
                <Link to={`/fiche/compterendu/${wine.id_wine}`}>
                  <FicheDegustation
                    key={wine.id_wine}
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                      wine.wineImage
                    }`}
                    title={wine.wineName}
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 py-[1.8rem]">
              <Link to="/profil/historique_fiches">
                <button type="button">Voir plus</button>
              </Link>
              <Link to="/profil/profil_degustation">
                <button type="button">Mon profil dégustation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
