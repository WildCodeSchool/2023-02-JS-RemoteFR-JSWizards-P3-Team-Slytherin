import { Link } from "react-router-dom";
import VinEnCours from "@components/VinEnCours";
import { useChoice } from "@contexts/ChoiceContext";

export default function Visuel() {
  const {
    selectVueCouleur,
    selectVueLimpidite,
    selectVueDensite,
    setSelectVueCouleur,
    setSelectVueLimpidite,
    setSelectVueDensite,
  } = useChoice();

  const handleColorClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    couleurClass.classList.toggle("hidden");
    if (limpiditeClass.classList.value !== "hidden") {
      limpiditeClass.classList.toggle("hidden");
    }
    if (densiteClass.classList.value !== "hidden") {
      densiteClass.classList.toggle("hidden");
    }
  };

  const handleLimpiditeClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    limpiditeClass.classList.toggle("hidden");
    if (couleurClass.classList.value !== "hidden") {
      couleurClass.classList.toggle("hidden");
    }
    if (densiteClass.classList.value !== "hidden") {
      densiteClass.classList.toggle("hidden");
    }
  };

  const handleDensiteClick = () => {
    const couleurClass = document.getElementById("couleur");
    const limpiditeClass = document.getElementById("limpidite");
    const densiteClass = document.getElementById("densite");
    densiteClass.classList.toggle("hidden");
    if (couleurClass.classList.value !== "hidden") {
      couleurClass.classList.toggle("hidden");
    }
    if (limpiditeClass.classList.value !== "hidden") {
      limpiditeClass.classList.toggle("hidden");
    }
  };

  const handleSelectionClick = () => {
    if (document.querySelector("input[name=densite]:checked") !== null) {
      setSelectVueDensite(
        document.querySelector("input[name=densite]:checked + label").innerText
      );
    }
    if (document.querySelector("input[name=limpidite]:checked") !== null) {
      setSelectVueLimpidite(
        document.querySelector("input[name=limpidite]:checked + label")
          .innerText
      );
    }
    if (document.querySelector("input[name=couleur]:checked") !== null) {
      setSelectVueCouleur(
        document.querySelector("input[name=couleur]:checked + label").innerText
      );
    }
  };

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère visuel</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <form className="flex flex-col gap-6 justify-center w-3/4" action="">
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="">
              <input
                type="button"
                onClick={handleColorClick}
                value={
                  selectVueCouleur !== "-"
                    ? `Couleur : ${selectVueCouleur}`
                    : "Couleur : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="couleur" className="hidden">
                <div className="flex flex-row gap-10 mb-2 items-center justify-center">
                  <div className="flex flex-col gap-4 my-2">
                    <div className="bg-[#4A0019] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="quasi-noir"
                      />
                      <label className="mr-2" htmlFor="quasi-noir">
                        Quasi-noir
                      </label>
                    </div>
                    <div className="bg-[#A70045] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="pourpre"
                      />
                      <label className="mr-2" htmlFor="pourpre">
                        Pourpre
                      </label>
                    </div>
                    <div className="bg-[#9C0063] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="violet"
                      />
                      <label className="mr-2" htmlFor="violet">
                        Violet
                      </label>
                    </div>
                    <div className="bg-[#7E2950] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="grenat"
                      />
                      <label className="mr-2" htmlFor="grenat">
                        Grenat
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#FC1D5C] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="framboise"
                      />
                      <label className="mr-2" htmlFor="framboise">
                        Framboise
                      </label>
                    </div>
                    <div className="bg-[#EA0428] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="cerise"
                      />
                      <label className="mr-2" htmlFor="cerise">
                        Cerise
                      </label>
                    </div>
                    <div className="bg-[#C70400] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="rubis"
                      />
                      <label className="mr-2" htmlFor="rubis">
                        Rubis
                      </label>
                    </div>
                    <div className="bg-[#972000] rounded-full flex flex-row p-2">
                      <input
                        name="couleur"
                        className="m-2"
                        type="radio"
                        onClick={handleSelectionClick}
                        id="tuile"
                      />
                      <label className="mr-2" htmlFor="tuile">
                        Tuilé
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleLimpiditeClick}
                value={
                  selectVueLimpidite !== "-"
                    ? `Limpidité : ${selectVueLimpidite}`
                    : "Limpidité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="limpidite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="pale"
                  />
                  <label className="mr-2" htmlFor="pale">
                    Pale
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="clair"
                  />
                  <label className="mr-2" htmlFor="clair">
                    Clair
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="soutenu"
                  />
                  <label className="mr-2" htmlFor="soutenu">
                    Soutenu
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fonce"
                  />
                  <label className="mr-2" htmlFor="fonce">
                    Foncé
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="limpidite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="opaque"
                  />
                  <label className="mr-2" htmlFor="opaque">
                    Opaque
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="flex flex-col items-center">
              <input
                type="button"
                onClick={handleDensiteClick}
                value={
                  selectVueDensite !== "-"
                    ? `Densité : ${selectVueDensite}`
                    : "Densité : -"
                }
                className="fiche-deg-button p-2 w-full"
              />
              <div id="densite" className="hidden">
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="visqueuses"
                  />
                  <label className="mr-2" htmlFor="visqueuses">
                    Larmes visqueuses
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="grasses"
                  />
                  <label className="mr-2" htmlFor="grasses">
                    Larmes grasses
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="coulantes"
                  />
                  <label className="mr-2" htmlFor="coulantes">
                    Larmes coulantes
                  </label>
                </div>
                <div className="rounded-full flex flex-row p-2">
                  <input
                    name="densite"
                    className="m-2"
                    type="radio"
                    onClick={handleSelectionClick}
                    id="fluides"
                  />
                  <label className="mr-2" htmlFor="fluides">
                    Larmes fluides
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="w-full flex justify-center gap-4 my-4">
            <Link to="/selection">
              <button type="button">Retour à la sélection</button>
            </Link>
            <Link to="/fiche/olfactif">
              <button type="button">Suivant</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
