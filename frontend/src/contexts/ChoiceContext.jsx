import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import VUE from "../helpers/visuel";
import NEZ from "../helpers/olfactif";
import BOUCHE from "../helpers/gustatif";

const ChoiceContext = createContext();

export function ChoiceProvider({ children }) {
  const [selectVueCouleur, setSelectVueCouleur] = useState(
    VUE.couleurRouge.couleur1
  );
  const [selectVueLimpidite, setSelectVueLimpidite] = useState(
    VUE.limpidite.limpidite2
  );
  const [selectVueDensite, setSelectVueDensite] = useState(
    VUE.densite.densite3
  );
  console.info(setSelectVueCouleur, setSelectVueLimpidite, setSelectVueDensite);

  const [selectNezIntensite, setSelectNezIntensite] = useState(
    NEZ.intensite.intensite1
  );
  const [selectNezFruit, setSelectNezFruit] = useState(NEZ.fruitsRouges.fruit2);
  const [selectNezFleur, setSelectNezFleur] = useState(NEZ.fleursRouges.fleur3);
  const [selectNezVegetal, setSelectNezVegetal] = useState(
    NEZ.vegetalRouge.vegetal4
  );
  const [selectNezEpice, setSelectNezEpice] = useState(NEZ.epiceRouge.epice5);
  const [selectNezAmpyreumatique, setSelectNezAmpyreumatique] = useState(
    NEZ.ampyreumatiqueRouge.ampyreumatique6
  );
  const [selectNezMineral, setSelectNezMineral] = useState(
    NEZ.mineralRouge.mineral1
  );
  console.info(
    setSelectNezIntensite,
    setSelectNezFruit,
    setSelectNezFleur,
    setSelectNezVegetal,
    setSelectNezEpice,
    setSelectNezAmpyreumatique,
    setSelectNezMineral
  );

  const [selectBouchePersistance, setSelectBouchePersistance] = useState(
    BOUCHE.persistance.persistance1
  );
  const [selectBoucheMoelleux, setSelectBoucheMoelleux] = useState(
    BOUCHE.moelleux.moelleux2
  );
  const [selectBoucheAcidite, setSelectBoucheAcidite] = useState(
    BOUCHE.acidite.acidite3
  );
  const [selectBoucheTanin, setSelectBoucheTanin] = useState(
    BOUCHE.tanin.tanin4
  );
  const [selectBoucheAlcool, setSelectBoucheAlcool] = useState(
    BOUCHE.alcool.alcool5
  );
  const [selectBoucheFruit, setSelectBoucheFruit] = useState(
    BOUCHE.fruitsRouges.fruit12
  );
  const [selectBoucheFleur, setSelectBoucheFleur] = useState(
    BOUCHE.fleursRouges.fleur7
  );
  const [selectBoucheVegetal, setSelectBoucheVegetal] = useState(
    BOUCHE.vegetalRouge.vegetal14
  );
  const [selectBoucheEpice, setSelectBoucheEpice] = useState(
    BOUCHE.epiceRouge.epice9
  );
  const [selectBoucheAmpyreumatique, setSelectBoucheAmpyreumatique] = useState(
    BOUCHE.ampyreumatiqueRouge.ampyreumatique11
  );
  const [selectBoucheMineral, setSelectBouchezMineral] = useState(
    BOUCHE.mineralRouge.mineral4
  );
  console.info(
    setSelectBouchePersistance,
    setSelectBoucheMoelleux,
    setSelectBoucheAcidite,
    setSelectBoucheTanin,
    setSelectBoucheAlcool,
    setSelectBoucheFruit,
    setSelectBoucheFleur,
    setSelectBoucheVegetal,
    setSelectBoucheEpice,
    setSelectBoucheAmpyreumatique,
    setSelectBouchezMineral
  );

  const propsPassing = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return (
    <ChoiceContext.Provider value={propsPassing}>
      {children}
    </ChoiceContext.Provider>
  );
}

ChoiceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChoice = () => useContext(ChoiceContext);
