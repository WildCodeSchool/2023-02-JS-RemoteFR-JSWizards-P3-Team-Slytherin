import PropTypes from "prop-types";
import { useEffect } from "react";
import SelectMenu from "./SelectMenu";
import Dosage from "./Dosage";

function LigneRecette({
  index,
  selectedWines,
  setSelectedWines,
  wineSelectionOrderByNote,
  wineSelectionNonSelected0,
  setWineSelectionNonSelected0,
  wineSelectionNonSelected1,
  setWineSelectionNonSelected1,
  wineSelectionNonSelected2,
  setWineSelectionNonSelected2,
  dosage,
  setDosage,
  dosageTotal,
  setDosageTotal,
  dosage100,
  setDosage100,
  dosage75cl,
  setDosage75cl,
  defaultObject,
}) {
  // {*
  // wineSelectionNonSelected0, wineSelectionNonSelected1, wineSelectionNonSelected2
  // rassemblent l'ensemble des vins de l'atelier qui n'ont pas été sélectionnés par les autres menus déroulant
  // ils alimentent les options des menus déroulant
  // *}
  useEffect(() => {
    const nextWineSelectionNonSelected0 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (
          wine.name !== selectedWines[1].name &&
          wine.name !== selectedWines[2].name
        ) {
          return wine.name;
        }
        return false;
      }
    );
    const nextWineSelectionNonSelected1 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (
          wine.name !== selectedWines[0].name &&
          wine.name !== selectedWines[2].name
        ) {
          return wine.name;
        }
        return false;
      }
    );
    const nextWineSelectionNonSelected2 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (
          wine.name !== selectedWines[0].name &&
          wine.name !== selectedWines[1].name
        ) {
          return wine.name;
        }
        return false;
      }
    );

    setWineSelectionNonSelected0(nextWineSelectionNonSelected0);
    setWineSelectionNonSelected1(nextWineSelectionNonSelected1);
    setWineSelectionNonSelected2(nextWineSelectionNonSelected2);
  }, [selectedWines]);

  // {* calcul des dosages *}
  useEffect(() => {
    setDosageTotal(dosage.reduce((a, b) => a + b, 0));
  }, [dosage]);
  useEffect(() => {
    const nextDosage100 = dosage.map((e) =>
      dosageTotal === 0 ? 0 : Number(((e / dosageTotal) * 100).toFixed(2))
    );
    setDosage100(nextDosage100);
    const nextDosage75cl = dosage.map((e) =>
      dosageTotal === 0 ? 0 : Number(((e / dosageTotal) * 250).toFixed(0))
    );
    setDosage75cl(nextDosage75cl);
  }, [dosageTotal]);

  return (
    <div>
      <div className="flex max-md:flex-col flex-row justify-between max-md:items-center md:items-end w-full mt-12 md:portrait:mt-20">
        <SelectMenu
          index={index}
          wineSelectionNonSelected0={wineSelectionNonSelected0}
          wineSelectionNonSelected1={wineSelectionNonSelected1}
          wineSelectionNonSelected2={wineSelectionNonSelected2}
          selectedWines={selectedWines}
          setSelectedWines={setSelectedWines}
          wineSelectionOrderByNote={wineSelectionOrderByNote}
          defaultObject={defaultObject}
        />
        <Dosage
          index={index}
          dosage={dosage}
          setDosage={setDosage}
          dosageTotal={dosageTotal}
        />
      </div>
      <div className="flex max-md:text-xs max-md:flex-col flex-row max-md:items-start max-md:justify-start justify-between md:px-8 items-center font-bold mt-2">
        <div>
          <p>{`Dosage bouteille : ${dosage75cl[index]} ml`}</p>
        </div>
        <div>
          <p>{`Dosage échantillon : ${dosage100[index]} %`}</p>
        </div>
      </div>
    </div>
  );
}

export default LigneRecette;

LigneRecette.propTypes = {
  wineSelectionOrderByNote: PropTypes.arrayOf(PropTypes.shape).isRequired,
  index: PropTypes.number.isRequired,
  selectedWines: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setSelectedWines: PropTypes.func.isRequired,
  wineSelectionNonSelected0: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setWineSelectionNonSelected0: PropTypes.func.isRequired,
  wineSelectionNonSelected1: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setWineSelectionNonSelected1: PropTypes.func.isRequired,
  wineSelectionNonSelected2: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setWineSelectionNonSelected2: PropTypes.func.isRequired,
  dosage: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDosage: PropTypes.func.isRequired,
  dosageTotal: PropTypes.number.isRequired,
  setDosageTotal: PropTypes.func.isRequired,
  dosage100: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDosage100: PropTypes.func.isRequired,
  dosage75cl: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDosage75cl: PropTypes.func.isRequired,
  defaultObject: PropTypes.shape({
    name: PropTypes.string,
    note: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};
