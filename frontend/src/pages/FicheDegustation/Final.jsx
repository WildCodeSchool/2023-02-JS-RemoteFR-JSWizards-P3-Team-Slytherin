import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useChoice } from "@contexts/ChoiceContext";
import { useUser } from "@contexts/UserContext";
import axios from "axios";
import VinEnCours from "@components/VinEnCours";

export default function Final() {
  const {
    selectNote,
    vinEnCours,
    selectVueCouleur,
    selectVueLimpidite,
    selectVueDensite,
    selectNezIntensite,
    selectNezFruit,
    selectNezFleur,
    selectNezVegetal,
    selectNezEpice,
    selectNezAmpyreumatique,
    selectNezMineral,
    selectBouchePersistance,
    selectBoucheMoelleux,
    selectBoucheAcidite,
    selectBoucheTanin,
    selectBoucheAlcool,
    selectBoucheFruit,
    selectBoucheFleur,
    selectBoucheVegetal,
    selectBoucheEpice,
    selectBoucheAmpyreumatique,
    selectBoucheMineral,
    setSelectNote,
  } = useChoice();

  const navigate = useNavigate();

  const { loggedInUser } = useUser();

  const [exist404, setExist404] = useState("");
  const [miseEnBDD, setMiseEnBDD] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSelectNote(e.target.value);
  };

  const handlePostTastingClick = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/tasting/users/${
          loggedInUser.id
        }/workshops/${vinEnCours.id_workshop}/wines/${vinEnCours.id_wine}`
      )
      .then((res) => {
        setExist404(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (exist404 === 404) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/tasting/`, {
          score: selectNote,
          color: selectVueCouleur,
          clarity: selectVueLimpidite,
          density: selectVueDensite,
          intensity: selectNezIntensite,
          noseFruits: selectNezFruit,
          noseFlowers: selectNezFleur,
          nosePlants: selectNezVegetal,
          noseSpices: selectNezEpice,
          noseAmpyreumatique: selectNezAmpyreumatique,
          noseMineral: selectNezMineral,
          mouthFruits: selectBoucheFruit,
          mouthFlowers: selectBoucheFleur,
          mouthPlants: selectBoucheVegetal,
          mouthSpices: selectBoucheEpice,
          mouthAmpyreumatique: selectBoucheAmpyreumatique,
          mouthMineral: selectBoucheMineral,
          persistance: selectBouchePersistance,
          smooth: selectBoucheMoelleux,
          acidity: selectBoucheAcidite,
          tanin: selectBoucheTanin,
          alcohol: selectBoucheAlcool,
          id_workshop: vinEnCours.id_workshop,
          id_user: loggedInUser.id,
          id_wine: vinEnCours.id_wine,
        })
        .catch((err) => console.error(err));
      setExist404("");
      setMiseEnBDD(true);
    } else {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/tasting/${exist404.id}`, {
          score: selectNote,
          color: selectVueCouleur,
          clarity: selectVueLimpidite,
          density: selectVueDensite,
          intensity: selectNezIntensite,
          noseFruits: selectNezFruit,
          noseFlowers: selectNezFleur,
          nosePlants: selectNezVegetal,
          noseSpices: selectNezEpice,
          noseAmpyreumatique: selectNezAmpyreumatique,
          noseMineral: selectNezMineral,
          mouthFruits: selectBoucheFruit,
          mouthFlowers: selectBoucheFleur,
          mouthPlants: selectBoucheVegetal,
          mouthSpices: selectBoucheEpice,
          mouthAmpyreumatique: selectBoucheAmpyreumatique,
          mouthMineral: selectBoucheMineral,
          persistance: selectBouchePersistance,
          smooth: selectBoucheMoelleux,
          acidity: selectBoucheAcidite,
          tanin: selectBoucheTanin,
          alcohol: selectBoucheAlcool,
          id_workshop: vinEnCours.id_workshop,
          id_user: loggedInUser.id,
          id_wine: vinEnCours.id_wine,
        })
        .catch((err) => console.error(err));
      setMiseEnBDD(true);
    }
    if (miseEnBDD) {
      navigate("/fiche");
    }
  }, [exist404]);

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Note Finale</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <div className="flex items-center justify-center flex-wrap gap-4 md:w-[620px]">
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={1}
          >
            1
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={2}
          >
            2
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={3}
          >
            3
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={4}
          >
            4
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={5}
          >
            5
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={6}
          >
            6
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={7}
          >
            7
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={8}
          >
            8
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={9}
          >
            9
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={10}
          >
            10
          </button>
        </div>
        <div className="my-4">Note {selectNote}/10</div>
        <div className="w-full flex justify-center gap-4 my-4">
          <Link to="/selection">
            <button type="button">Retour à la sélection</button>
          </Link>
          <Link to="/fiche/gustatif-part2">
            <button type="button" className="items-center">
              Précédent
            </button>
          </Link>

          <button type="button" onClick={handlePostTastingClick}>
            Suivant
          </button>
        </div>
      </div>
    </>
  );
}
