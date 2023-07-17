import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ChoiceContext = createContext();

export function ChoiceProvider({ children }) {
  const [selectVueCouleur, setSelectVueCouleur] = useState("-");
  const [selectVueLimpidite, setSelectVueLimpidite] = useState("-");
  const [selectVueDensite, setSelectVueDensite] = useState("-");

  const [selectNezIntensite, setSelectNezIntensite] = useState("-");
  const [selectNezFruit, setSelectNezFruit] = useState("-");
  const [selectNezFleur, setSelectNezFleur] = useState("-");
  const [selectNezVegetal, setSelectNezVegetal] = useState("-");
  const [selectNezEpice, setSelectNezEpice] = useState("-");
  const [selectNezAmpyreumatique, setSelectNezAmpyreumatique] = useState("-");
  const [selectNezMineral, setSelectNezMineral] = useState("-");

  const [selectBouchePersistance, setSelectBouchePersistance] = useState("-");
  const [selectBoucheMoelleux, setSelectBoucheMoelleux] = useState("-");
  const [selectBoucheAcidite, setSelectBoucheAcidite] = useState("-");
  const [selectBoucheTanin, setSelectBoucheTanin] = useState("-");
  const [selectBoucheAlcool, setSelectBoucheAlcool] = useState("-");
  const [selectBoucheFruit, setSelectBoucheFruit] = useState("-");
  const [selectBoucheFleur, setSelectBoucheFleur] = useState("-");
  const [selectBoucheVegetal, setSelectBoucheVegetal] = useState("-");
  const [selectBoucheEpice, setSelectBoucheEpice] = useState("-");
  const [selectBoucheAmpyreumatique, setSelectBoucheAmpyreumatique] =
    useState("-");
  const [selectBoucheMineral, setSelectBoucheMineral] = useState("-");
  const [selectNote, setSelectNote] = useState(0);

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
      selectNote,
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
      setSelectBoucheMineral,
      setSelectNezIntensite,
      setSelectNezFruit,
      setSelectNezFleur,
      setSelectNezVegetal,
      setSelectNezEpice,
      setSelectNezAmpyreumatique,
      setSelectNezMineral,
      setSelectVueCouleur,
      setSelectVueLimpidite,
      setSelectVueDensite,
      setSelectNote,
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
      selectNote,
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
      setSelectBoucheMineral,
      setSelectNezIntensite,
      setSelectNezFruit,
      setSelectNezFleur,
      setSelectNezVegetal,
      setSelectNezEpice,
      setSelectNezAmpyreumatique,
      setSelectNezMineral,
      setSelectVueCouleur,
      setSelectVueLimpidite,
      setSelectVueDensite,
      setSelectNote,
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
