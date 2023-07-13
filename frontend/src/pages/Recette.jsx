import LigneRecette from "@components/recette/LigneRecette";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// import data from "@components/Data/data-wine";

function order(a, b) {
  const bandA = a.score;
  const bandB = b.score;
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}
function orderById(a, b) {
  const bandA = a.id_wine;
  const bandB = b.id_wine;
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

function Recette() {
  const [dataSelection, setDataSelection] = useState([]);
  const [dataUserTasting, setDataUserTasting] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wineSelectionOrderByNote, setWineSelectionOrderByNote] = useState([]);
  const [defaultSelection, setDefaultSelection] = useState([]);
  const [wineSelectionNonSelected0, setWineSelectionNonSelected0] = useState(
    []
  );
  const [wineSelectionNonSelected1, setWineSelectionNonSelected1] = useState(
    []
  );
  const [wineSelectionNonSelected2, setWineSelectionNonSelected2] = useState(
    []
  );

  useEffect(() => {
    axios
      .all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/tasting/2/3`),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/wineWorkshop`),
      ])
      .then(
        axios.spread((...res) => {
          setDataSelection(res[1].data);
          setDataUserTasting(res[0].data);
        })
      )
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const newDataSelection = dataSelection.sort(orderById);
    const newDataUserTasting = dataUserTasting.sort(orderById);
    const nextDataSelection = newDataSelection.map((e) => {
      const obj = e;
      const note = {
        score: newDataUserTasting[newDataSelection.indexOf(e)].score,
      };
      return { ...obj, ...note };
    });
    const newWineSelectionOrderByNote = nextDataSelection.sort(order);
    setWineSelectionOrderByNote(newWineSelectionOrderByNote);
  }, [dataUserTasting]);

  useEffect(() => {
    setDefaultSelection([
      wineSelectionOrderByNote[0],
      wineSelectionOrderByNote[1],
      wineSelectionOrderByNote[2],
    ]);
    setWineSelectionNonSelected0(wineSelectionOrderByNote);
    setWineSelectionNonSelected1(wineSelectionOrderByNote);
    setWineSelectionNonSelected2(wineSelectionOrderByNote);
    if (wineSelectionOrderByNote[0]) setIsLoading(false);
  }, [wineSelectionOrderByNote]);

  const [dosage, setDosage] = useState([120, 0, 0]);
  const [dosageTotal, setDosageTotal] = useState(0);
  const [dosage100, setDosage100] = useState([0, 0, 0]);
  const [dosage75cl, setDosage75cl] = useState([0, 0, 0]);

  const defaultObject = { wineName: "", score: "" };
  const [selectedWines, setSelectedWines] = useState([
    defaultObject,
    defaultObject,
    defaultObject,
  ]);

  const [readyToRegister, setReadyToRegister] = useState(false);

  useEffect(() => {
    let check = 0;
    if (dosageTotal === 250) {
      check += 1;
    }
    if (
      (dosage[0] > 0 &&
        selectedWines[0].wineName !== undefined &&
        selectedWines[0].wineName !== defaultObject.wineName) ||
      dosage[0] === 0
    ) {
      check += 1;
    }
    if (
      (dosage[1] > 0 &&
        selectedWines[1].wineName !== undefined &&
        selectedWines[1].wineName !== defaultObject.wineName) ||
      dosage[1] === 0
    ) {
      check += 1;
    }
    if (
      (dosage[2] > 0 &&
        selectedWines[2].wineName !== undefined &&
        selectedWines[2].wineName !== defaultObject.wineName) ||
      dosage[2] === 0
    ) {
      check += 1;
    }
    if (check === 4) {
      setReadyToRegister(true);
    } else {
      setReadyToRegister(false);
    }
  }, [selectedWines, dosageTotal]);

  const handleClickValider = async () => {
    // changer le 2 pour le state id_user
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/recipes/creation/2`);
    const recipesList = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/recipes/all/2`
    );
    const { data } = recipesList;
    const recipeId = data[data.length - 1].id;
    const recipeWine = {
      idrecipe1: recipeId,
      idwine1: null,
      dosage1: dosage[0],
      idrecipe2: recipeId,
      idwine2: null,
      dosage2: dosage[1],
      idrecipe3: recipeId,
      idwine3: null,
      dosage3: dosage[2],
    };
    if (dosage[0] >= 0) {
      recipeWine.idwine1 = selectedWines[0].id_wine;
    }
    if (dosage[1] >= 0) {
      recipeWine.idwine2 = selectedWines[1].id_wine;
    }
    if (dosage[2] >= 0) {
      recipeWine.idwine3 = selectedWines[2].id_wine;
    }
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/recipeWine/creation`,
      recipeWine
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="text-secondary py-4">
        <p className="text-3xl text-center pt-4 md:portrait:pt-12">
          Ma recette
        </p>
      </div>
      {defaultSelection.map((e, index) => (
        <LigneRecette
          key={e.id_wine}
          wineSelectionOrderByNote={wineSelectionOrderByNote}
          index={index}
          selectedWines={selectedWines}
          setSelectedWines={setSelectedWines}
          wineSelectionNonSelected0={wineSelectionNonSelected0}
          setWineSelectionNonSelected0={setWineSelectionNonSelected0}
          wineSelectionNonSelected1={wineSelectionNonSelected1}
          setWineSelectionNonSelected1={setWineSelectionNonSelected1}
          wineSelectionNonSelected2={wineSelectionNonSelected2}
          setWineSelectionNonSelected2={setWineSelectionNonSelected2}
          dosage={dosage}
          setDosage={setDosage}
          dosageTotal={dosageTotal}
          setDosageTotal={setDosageTotal}
          dosage100={dosage100}
          setDosage100={setDosage100}
          dosage75cl={dosage75cl}
          setDosage75cl={setDosage75cl}
          defaultObject={defaultObject}
        />
      ))}
      <div className="flex flex-col xl:mx-20">
        <div className="flex max-md:flex-col max-md:items-center max-md:gap-4 flex-row justify-between max-md:py-16 md:pt-16">
          <Link to="/profil/profil_degustation">
            <button type="button">Profil dégustation</button>
          </Link>
          {readyToRegister ? (
            <Link to="/avis">
              <button onClick={handleClickValider} type="button">
                Valider
              </button>
            </Link>
          ) : (
            <div className="flex justify-center items-center font-bold bg-primary max-md:hidden border-2 border-tertiary text-tertiary w-40 rounded-3xl">
              <p className=" text-center text-2xl">{dosageTotal} ml</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Recette;
