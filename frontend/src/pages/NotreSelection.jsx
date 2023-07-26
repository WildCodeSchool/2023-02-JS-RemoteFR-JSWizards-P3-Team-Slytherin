import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useChoice } from "../contexts/ChoiceContext";
import { useUser } from "../contexts/UserContext";

export default function NotreSelection() {
  const { selection, setSelection, vinEnCours, setVinEnCours } = useChoice();
  const { loggedInUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading1, setIsLoading1] = useState(true);
  const [choice, setChoice] = useState(false);
  const [userWorkshop] = useState({
    id_workshop: "",
    id_user: "",
    note1: null,
    note2: null,
    note3: null,
    comment: null,
  });
  const [note, setNote] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const callAPI = async () => {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/wineWorkshop`)
        .then((res) => {
          setSelection(res.data);
          setIsLoading1(false);

          const APIGETAVISIDS = `${import.meta.env.VITE_BACKEND_URL}/avis/${
            loggedInUser.id
          }/${res.data[0].id_workshop}`;
          const APIAVISIDSPOST = `${
            import.meta.env.VITE_BACKEND_URL
          }/avis/creation`;

          const userWorkshopCopy = { ...userWorkshop };
          userWorkshopCopy.id_workshop = res.data[0].id_workshop;
          userWorkshopCopy.id_user = loggedInUser.id;

          axios
            .get(APIGETAVISIDS)
            .then((response) => {
              if (response.data === 404) {
                axios
                  .post(APIAVISIDSPOST, userWorkshopCopy)
                  .catch((err) => console.error(err));
              }
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    };
    callAPI();
  }, [isLoading]);

  useEffect(() => {
    const getNoteWines = async () => {
      try {
        await axios
          .get(
            `${import.meta.env.VITE_BACKEND_URL}/allWinesFromActiveWorkshops/${
              loggedInUser.id
            }/${selection[0].id}`
          )
          .then((res) => {
            setNote(res.data);
            setIsLoading(false);
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    };
    if (!isLoading1) {
      getNoteWines();
    }
  }, [selection]);

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
        {note.map((wine, index) => (
          <div
            role="button"
            key={wine.id}
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
              value={wine.id}
            />
            <div className="bg-secondary text-primary text-center rounded-b-xl p-2 h-[108px] flex flex-col max-w-[160px] justify-center">
              <h3 className="bg-secondary rounded-b-xl text-primary max-w-[160px] h-[72px] text-center p-2 flex flex-col justify-center">
                {wine.wineName}
              </h3>
              <h4 className="text-tertiary">
                {wine.score !== null ? `${wine.score}/10` : "A tester"}
              </h4>
            </div>
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
