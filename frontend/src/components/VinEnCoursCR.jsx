import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function VinEnCoursCR({ id }) {
  const [wine, setWine] = useState({ wineImage: "default.jpg" });
  const API = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${API}/wines/${id}`)
      .then((data) => {
        setWine(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mt-8 flex w-full justify-center">
      <div className="flex items-center w-3/4 gap-4">
        <img
          className="h-[144px]"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
            wine.wineImage
          }`}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">{wine.wineName}</h2>
          <div className="flex gap-2">
            <h3 className="font-bold">Année :</h3>
            <p>{wine.wineYear}</p>
          </div>
          <h3 className="font-bold">{wine.castle}</h3>
          <p>{wine.wineDescription}</p>
        </div>
      </div>
    </div>
  );
}

VinEnCoursCR.propTypes = {
  id: PropTypes.number.isRequired,
};
