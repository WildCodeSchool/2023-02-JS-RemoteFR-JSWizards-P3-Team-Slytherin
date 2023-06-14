import Layout from "@components/Layout";
import VinEnCours from "@components/VinEnCours";

const handleColorClick = () => {
  const couleur = document.getElementById("couleur");
  couleur.classList.toggle("hidden");
};

export default function Visuel() {
  return (
    <Layout>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère visuel</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <form className="flex flex-col gap-4 justify-center w-3/4" action="">
          <div className="text-center border-[1px] rounded-md px-4 bg-primary">
            <fieldset className="">
              <input
                type="button"
                onClick={handleColorClick}
                value="Couleur"
                className="fiche-deg-button p-2 "
              />
              <div id="couleur" className="flex flex-row gap-10 mb-2">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#4A0019] rounded-full flex flex-row p-2">
                    <input className="m-2" type="radio" id="quasi-noir" />
                    <label className="mr-2" htmlFor="quasi-noir">
                      quasi-noir
                    </label>
                  </div>
                  <div className="bg-[#A70045] rounded-full flex flex-row p-2">
                    <input className="m-2" type="radio" id="pourpre" />
                    <label className="mr-2" htmlFor="pourpre">
                      pourpre
                    </label>
                  </div>
                  <div className="bg-[#9C0063] rounded-full flex flex-row p-2">
                    <input className="m-2" type="radio" id="violet" />
                    <label className="mr-2" htmlFor="violet">
                      violet
                    </label>
                  </div>
                  <div className="bg-[#7E2950] rounded-full flex flex-row p-2">
                    <input className="m-2" type="radio" id="grenat" />
                    <label className="mr-2" htmlFor="grenat">
                      grenat
                    </label>
                  </div>
                </div>
                <div className="flex flex-row gap-10 mb-2">
                  <div className="flex flex-col gap-4">
                    <div className="bg-[#FC1D5C] rounded-full flex flex-row p-2">
                      <input className="m-2" type="radio" id="quasi-noir" />
                      <label className="mr-2" htmlFor="quasi-noir">
                        Quasi-noir
                      </label>
                    </div>
                    <div className="bg-[#EA0428] rounded-full flex flex-row p-2">
                      <input className="m-2" type="radio" id="quasi-noir" />
                      <label className="mr-2" htmlFor="quasi-noir">
                        Quasi-noir
                      </label>
                    </div>
                    <div className="bg-[#C70400] rounded-full flex flex-row p-2">
                      <input className="m-2" type="radio" id="quasi-noir" />
                      <label className="mr-2" htmlFor="quasi-noir">
                        Quasi-noir
                      </label>
                    </div>
                    <div className="bg-[#972000] rounded-full flex flex-row p-2">
                      <input className="m-2" type="radio" id="quasi-noir" />
                      <label className="mr-2" htmlFor="quasi-noir">
                        Quasi-noir
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 py-1">
            <label htmlFor="limpidite">Limpidité</label>
          </div>
          <div className="text-center border-[1px] rounded-md px-4 py-1">
            <label htmlFor="densite">Densité</label>
          </div>
          <div className="absolute w-[400px] right-[calc(50%-200px)] bottom-8 flex justify-center gap-4">
            <button type="button">Retour au catalogue</button>
            <button type="button">Suivant</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
