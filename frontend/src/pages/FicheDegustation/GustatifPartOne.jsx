import { useEffect, useState } from "react";
import { useChoice } from "@contexts/ChoiceContext";
import { Link } from "react-router-dom";
import VinEnCours from "@components/VinEnCours";

export default function GustatifPartOne() {
  const [test, setTest] = useState({});

  const {
    selectBouchePersistance,
    selectBoucheMoelleux,
    selectBoucheAcidite,
    selectBoucheTanin,
    selectBoucheAlcool,
    setSelectBouchePersistance,
    setSelectBoucheMoelleux,
    setSelectBoucheAcidite,
    setSelectBoucheTanin,
    setSelectBoucheAlcool,
  } = useChoice();

  const handlePersistanceClick = () => {
    const persistanceClass = document.getElementById("persistance");
    const taninClass = document.getElementById("tanin");
    const moelleuxClass = document.getElementById("moelleux");
    const aciditeClass = document.getElementById("acidite");
    const alcoolClass = document.getElementById("alcool");
    persistanceClass.classList.toggle("hidden");
    if (moelleuxClass.classList.value !== "hidden") {
      moelleuxClass.classList.toggle("hidden");
    }
    if (aciditeClass.classList.value !== "hidden") {
      aciditeClass.classList.toggle("hidden");
    }
    if (taninClass.classList.value !== "hidden") {
      taninClass.classList.toggle("hidden");
    }
    if (alcoolClass.classList.value !== "hidden") {
      alcoolClass.classList.toggle("hidden");
    }
  };

  const handleMoelleuxClick = () => {
    const persistanceClass = document.getElementById("persistance");
    const taninClass = document.getElementById("tanin");
    const moelleuxClass = document.getElementById("moelleux");
    const aciditeClass = document.getElementById("acidite");
    const alcoolClass = document.getElementById("alcool");
    moelleuxClass.classList.toggle("hidden");
    if (persistanceClass.classList.value !== "hidden") {
      persistanceClass.classList.toggle("hidden");
    }
    if (aciditeClass.classList.value !== "hidden") {
      aciditeClass.classList.toggle("hidden");
    }
    if (taninClass.classList.value !== "hidden") {
      taninClass.classList.toggle("hidden");
    }
    if (alcoolClass.classList.value !== "hidden") {
      alcoolClass.classList.toggle("hidden");
    }
  };

  const handleAciditeClick = () => {
    const persistanceClass = document.getElementById("persistance");
    const taninClass = document.getElementById("tanin");
    const moelleuxClass = document.getElementById("moelleux");
    const aciditeClass = document.getElementById("acidite");
    const alcoolClass = document.getElementById("alcool");
    aciditeClass.classList.toggle("hidden");
    if (persistanceClass.classList.value !== "hidden") {
      persistanceClass.classList.toggle("hidden");
    }
    if (moelleuxClass.classList.value !== "hidden") {
      moelleuxClass.classList.toggle("hidden");
    }
    if (taninClass.classList.value !== "hidden") {
      taninClass.classList.toggle("hidden");
    }
    if (alcoolClass.classList.value !== "hidden") {
      alcoolClass.classList.toggle("hidden");
    }
  };

  const handleTaninClick = () => {
    const persistanceClass = document.getElementById("persistance");
    const taninClass = document.getElementById("tanin");
    const moelleuxClass = document.getElementById("moelleux");
    const aciditeClass = document.getElementById("acidite");
    const alcoolClass = document.getElementById("alcool");
    taninClass.classList.toggle("hidden");
    if (persistanceClass.classList.value !== "hidden") {
      persistanceClass.classList.toggle("hidden");
    }
    if (moelleuxClass.classList.value !== "hidden") {
      moelleuxClass.classList.toggle("hidden");
    }
    if (aciditeClass.classList.value !== "hidden") {
      aciditeClass.classList.toggle("hidden");
    }
    if (alcoolClass.classList.value !== "hidden") {
      alcoolClass.classList.toggle("hidden");
    }
  };

  const handleAlcoolClick = () => {
    const persistanceClass = document.getElementById("persistance");
    const taninClass = document.getElementById("tanin");
    const moelleuxClass = document.getElementById("moelleux");
    const aciditeClass = document.getElementById("acidite");
    const alcoolClass = document.getElementById("alcool");
    alcoolClass.classList.toggle("hidden");
    if (persistanceClass.classList.value !== "hidden") {
      persistanceClass.classList.toggle("hidden");
    }
    if (moelleuxClass.classList.value !== "hidden") {
      moelleuxClass.classList.toggle("hidden");
    }
    if (aciditeClass.classList.value !== "hidden") {
      aciditeClass.classList.toggle("hidden");
    }
    if (taninClass.classList.value !== "hidden") {
      taninClass.classList.toggle("hidden");
    }
  };

  const handleSelectionClick = () => {
    if (document.querySelector("input[name=acidite]:checked") !== null) {
      setSelectBoucheAcidite(
        document.querySelector("input[name=acidite]:checked + label").innerText
      );
    }
    if (document.querySelector("input[name=moelleux]:checked") !== null) {
      setSelectBoucheMoelleux(
        document.querySelector("input[name=moelleux]:checked + label").innerText
      );
    }
    if (document.querySelector("input[name=persistance]:checked") !== null) {
      setSelectBouchePersistance(
        document.querySelector("input[name=persistance]:checked + label")
          .innerText
      );
    }
    if (document.querySelector("input[name=tanin]:checked") !== null) {
      setSelectBoucheTanin(
        document.querySelector("input[name=tanin]:checked + label").innerText
      );
    }
    if (document.querySelector("input[name=alcool]:checked") !== null) {
      setSelectBoucheAlcool(
        document.querySelector("input[name=alcool]:checked + label").innerText
      );
    }
  };

  const handleTest = (e) => {
    e.preventDefault();
    setTest({
      persistance: selectBouchePersistance,
      moelleux: selectBoucheMoelleux,
      acidite: selectBoucheAcidite,
      tanin: selectBoucheTanin,
      alcool: selectBoucheAlcool,
    });
  };

  useEffect(() => {
    console.info(test);
  }, [test]);

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère gustatif 1/2</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <form className="flex flex-col gap-6 justify-center w-3/4" action="">
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handlePersistanceClick}
                value={
                  selectBouchePersistance !== "-"
                    ? `Persistance : ${selectBouchePersistance}`
                    : "Persistance : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="persistance" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="persistance"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="court"
                  />
                  <label className="mr-2" htmlFor="court">
                    Court
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="persistance"
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
                    name="persistance"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="long"
                  />
                  <label className="mr-2" htmlFor="long">
                    Long
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleMoelleuxClick}
                value={
                  selectBoucheMoelleux !== "-"
                    ? `Moëlleux : ${selectBoucheMoelleux}`
                    : "Moëlleux : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="moelleux" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="moelleux"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="liquoreux"
                  />
                  <label className="mr-2" htmlFor="liquoreux">
                    Liquoreux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="moelleux"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="doux"
                  />
                  <label className="mr-2" htmlFor="doux">
                    Doux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="moelleux"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="moelleu"
                  />
                  <label className="mr-2" htmlFor="moelleu">
                    Moëlleux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="moelleux"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="demi-sec"
                  />
                  <label className="mr-2" htmlFor="demi-sec">
                    Demi-sec
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="moelleux"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="sec"
                  />
                  <label className="mr-2" htmlFor="sec">
                    Sec
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleAciditeClick}
                value={
                  selectBoucheAcidite !== "-"
                    ? `Acidité : ${selectBoucheAcidite}`
                    : "Acidité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="acidite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="acidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="faible"
                  />
                  <label className="mr-2" htmlFor="faible">
                    Faible
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="acidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fraiche"
                  />
                  <label className="mr-2" htmlFor="fraiche">
                    Fraiche
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="acidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="vive"
                  />
                  <label className="mr-2" htmlFor="vive">
                    Vive
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="acidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="nerveuse"
                  />
                  <label className="mr-2" htmlFor="nerveuse">
                    Nerveuse
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="acidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="agressive"
                  />
                  <label className="mr-2" htmlFor="agressive">
                    Agressive
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleTaninClick}
                value={
                  selectBoucheTanin !== "-"
                    ? `Tanin : ${selectBoucheTanin}`
                    : "Tanin : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="tanin" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="tanin"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="lisse"
                  />
                  <label className="mr-2" htmlFor="lisse">
                    Lisse
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="tanin"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fondu"
                  />
                  <label className="mr-2" htmlFor="fondu">
                    Fondu
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="tanin"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="charpente"
                  />
                  <label className="mr-2" htmlFor="charpente">
                    Charpenté
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="tanin"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="charge"
                  />
                  <label className="mr-2" htmlFor="charge">
                    Chargé
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="tanin"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="apre"
                  />
                  <label className="mr-2" htmlFor="apre">
                    Âpre
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleAlcoolClick}
                value={
                  selectBoucheAlcool !== "-"
                    ? `Alcool : ${selectBoucheAlcool}`
                    : "Alcool : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="alcool" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="alcool"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="alcooleux"
                  />
                  <label className="mr-2" htmlFor="alcooleux">
                    Alcooleux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="alcool"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="capiteux"
                  />
                  <label className="mr-2" htmlFor="capiteux">
                    Capiteux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="alcool"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="gras"
                  />
                  <label className="mr-2" htmlFor="gras">
                    Gras
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="alcool"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="genereux"
                  />
                  <label className="mr-2" htmlFor="genereux">
                    Généreux
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="alcool"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="faible-alc"
                  />
                  <label className="mr-2" htmlFor="faible-alc">
                    Faible
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="w-full flex justify-center gap-4 my-4">
            <Link to="/selection">
              <button type="button">Retour au catalogue</button>
            </Link>
            <Link to="/fiche/olfactif">
              <button type="button" className="items-center">
                Précédent
              </button>
            </Link>
            <Link to="/fiche/gustatif-part2">
              <button type="button">Suivant</button>
            </Link>
          </div>
          <button type="button" onClick={handleTest}>
            Test
          </button>
        </form>
      </div>
    </>
  );
}
