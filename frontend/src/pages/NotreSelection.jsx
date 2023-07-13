import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function NotreSelection() {
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/wineWorkshop`;
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
    <>
      <h2 className="text-center font-bold text-2xl p-12 text-secondary">
        Notre sélection de vins
      </h2>

      <div className="flex gap-14 flex-wrap justify-center">
        {selection.map((wine) => (
          <div key={wine.id_wine}>
            <img
              className="object-cover w-[160px] h-[187px] rounded-t-xl"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                wine.wineImage
              }`}
              alt={wine.wineName}
            />

            <h3 className="bg-secondary rounded-b-xl text-primary max-w-[160px] h-[72px] text-center p-2 flex flex-col justify-center">
              {wine.wineName}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/profil/profil_degustation">
          <button type="button" className="m-12">
            Profil dégustation
          </button>
        </Link>
      </div>
    </>
  );
}
