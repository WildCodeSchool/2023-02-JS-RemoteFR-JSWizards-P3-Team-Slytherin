import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilDegustation() {
  const [getWine, setGetWine] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/resume`)
      .then((res) => {
        setGetWine(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="text-secondary p-[1.5rem] sm:px-[3.2rem] md:px-[6.4rem] min-[950px]:px-[7.5rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl pb-[2rem]">Profil dégustation</h2>
        </div>
        {getWine.map((wine) => (
          <>
            <h3 className="text-xl pb-2 mt-4 font-bold">{wine.wineName}</h3>
            <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between ">
              <p>{wine.wineDescription}</p>
              <span className="text-tertiary text-center text-xl border-2 rounded-full p-3">
                {" "}
                {wine.score}
              </span>
            </div>
          </>
        ))}
        <div className="flex flex-row justify-around items-center py-[3rem]">
          <Link to="/selection">
            <button type="button" className="self-center mt-2 h-12">
              Retour à la sélection
            </button>
          </Link>
          <Link to="/recette">
            <button type="button" className="self-center mt-2 h-12">
              Recette
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
