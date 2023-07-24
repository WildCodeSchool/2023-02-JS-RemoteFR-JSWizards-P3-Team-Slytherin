import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useChoice } from "../contexts/ChoiceContext";
import { useUser } from "../contexts/UserContext";

export default function NotreSelection() {
  const { selection, setSelection, vinEnCours, setVinEnCours } = useChoice();
  const { loggedInUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [choice, setChoice] = useState(false);
  const [userWorkshop] = useState({
    id_workshop: "",
    id_user: "",
    note1: null,
    note2: null,
    note3: null,
    comment: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/wineWorkshop`;
    const APIAVISIDSPOST = `${import.meta.env.VITE_BACKEND_URL}/avis/creation`;

    axios
      .get(API)
      .then((res) => {
        setSelection(res.data);
        setIsLoading(false);

        const userWorkshopCopy = { ...userWorkshop };
        userWorkshopCopy.id_workshop = res.data[0].id_workshop;
        userWorkshopCopy.id_user = loggedInUser.id;

        axios
          .post(APIAVISIDSPOST, userWorkshopCopy)
          .then(() => {})
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      console.info("Escape pressed");
    }
  }

  useEffect(() => {
    if (choice) {
      navigate("/fiche/visuel");
    }
  }, [vinEnCours, choice]);

  if (isLoading) {
    return <p>Chargement</p>;
  }

  return (
    <>
      <h2 className="text-center font-bold text-2xl p-12 text-secondary">
        Notre sélection de vins
      </h2>

      <div className="flex gap-14 flex-wrap justify-center">
        {selection.map((wine, index) => (
          <div
            role="button"
            key={wine.id_wine}
            tabIndex={index}
            onKeyDown={handleKeyDown}
            onClick={() => {
              setVinEnCours(selection[index]);
              setChoice(!choice);
            }}
          >
            <img
              className="object-cover w-[160px] h-[187px] rounded-t-xl"
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                wine.wineImage
              }`}
              alt={wine.wineName}
              value={wine.id_wine}
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
