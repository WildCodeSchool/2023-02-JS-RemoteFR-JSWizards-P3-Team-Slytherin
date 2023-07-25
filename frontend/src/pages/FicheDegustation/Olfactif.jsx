import { useChoice } from "@contexts/ChoiceContext";
import { Link } from "react-router-dom";
import Select from "react-select";
import VinEnCours from "@components/VinEnCours";
import options from "../../helpers/gustatifHelper";

export default function Olfactif() {
  const {
    vinEnCours,
    selectNezIntensite,
    setSelectNezIntensite,
    setSelectNezFruit,
    setSelectNezFleur,
    setSelectNezVegetal,
    setSelectNezEpice,
    setSelectNezAmpyreumatique,
    setSelectNezMineral,
  } = useChoice();

  const handleIntensiteClick = () => {
    const intensiteClass = document.getElementById("intensite");
    intensiteClass.classList.toggle("hidden");
  };

  const handleSelectionClick = () => {
    if (document.querySelector("input[name=intensite]:checked") !== null) {
      setSelectNezIntensite(
        document.querySelector("input[name=intensite]:checked + label")
          .innerText
      );
    }
  };

  const handleFruitChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezFruit(string);
  };

  const handleFleurChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezFleur(string);
  };

  const handleVegetalChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezVegetal(string);
  };

  const handleEpiceChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezEpice(string);
  };

  const handleAmpyrChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezAmpyreumatique(string);
  };

  const handleMineralChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectNezMineral(string);
  };

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère olfactif</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <form className="flex flex-col gap-6 justify-center w-3/4" action="">
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleIntensiteClick}
                value={
                  selectNezIntensite !== "-"
                    ? `Intensité : ${selectNezIntensite}`
                    : "Intensité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="intensite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="intensite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fermé"
                  />
                  <label className="mr-2" htmlFor="fermé">
                    Fermé
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="intensite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="moyen"
                  />
                  <label className="mr-2" htmlFor="moyen">
                    Moyen
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="intensite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="ouvert"
                  />
                  <label className="mr-2" htmlFor="ouvert">
                    Ouvert
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <span className="border-b-2 border-b-secondary" />
          <div className="flex items-center justify-center">
            Familles aromatiques olfactives
          </div>
          <span className="border-b-2 border-b-secondary" />
          <div className="w-full flex flex-col gap-1">
            <div>Fruit</div>
            <Select
              isMulti
              name="fruit"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.fruitRougeOptions
                  : options.fruitBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleFruitChange}
            />
            <div className="mt-2">Fleur</div>
            <Select
              isMulti
              name="fleur"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.fleurRougeOptions
                  : options.fleurBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleFleurChange}
            />
            <div className="mt-2">Végétal</div>
            <Select
              isMulti
              name="vegetal"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.vegetalRougeOptions
                  : options.vegetalBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleVegetalChange}
            />
            <div className="mt-2">Épice</div>
            <Select
              isMulti
              name="epice"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.epiceRougeOptions
                  : options.epiceBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleEpiceChange}
            />
            <div className="mt-2">Ampyreumatique</div>
            <Select
              isMulti
              name="ampyr"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.ampyreumatiqueRougeOptions
                  : options.ampyreumatiqueBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleAmpyrChange}
            />
            <div className="mt-2">Minéral</div>
            <Select
              isMulti
              name="mineral"
              options={
                vinEnCours.wineType === "rouge"
                  ? options.mineralRougeOptions
                  : options.mineralBlancOptions
              }
              className="basic-multi-select text-primary"
              classNamePrefix="select"
              onChange={handleMineralChange}
            />
          </div>
          <div className="w-full flex justify-center gap-4 my-4">
            <Link to="/selection">
              <button type="button">Retour à la sélection</button>
            </Link>
            <Link to="/fiche/visuel">
              <button type="button" className="items-center">
                Précédent
              </button>
            </Link>
            <Link to="/fiche/gustatif-part1">
              <button type="button">Suivant</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
