import PropTypes from "prop-types";
import { useEffect } from "react";

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
}) {
  function handleChange(e) {
    const nextSelectedWines = selectedWines.map((selected, i) => {
      if (Number(e.target.id) === i) {
        return e.target.value;
      }
      return selected;
    });
    setSelectedWines(nextSelectedWines);
  }
  useEffect(() => {
    const nextWineSelectionNonSelected0 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (wine.name !== selectedWines[1] && wine.name !== selectedWines[2]) {
          return wine.name;
        }
        return false;
      }
    );
    const nextWineSelectionNonSelected1 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (wine.name !== selectedWines[0] && wine.name !== selectedWines[2]) {
          return wine.name;
        }
        return false;
      }
    );
    const nextWineSelectionNonSelected2 = wineSelectionOrderByNote.filter(
      (wine) => {
        if (wine.name !== selectedWines[0] && wine.name !== selectedWines[1]) {
          return wine.name;
        }
        return false;
      }
    );

    setWineSelectionNonSelected0(nextWineSelectionNonSelected0);
    setWineSelectionNonSelected1(nextWineSelectionNonSelected1);
    setWineSelectionNonSelected2(nextWineSelectionNonSelected2);
  }, [selectedWines]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full mt-12">
        <div className="flex flex-row justify-between items-center w-1/2">
          <select
            onChange={handleChange}
            className="recetteSelect"
            name="selection"
            id={`${index}`}
          >
            <option className="recetteOption" value="">
              -Vide-
            </option>
            {index === 0 &&
              wineSelectionNonSelected0.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name} - {e.note}/10
                </option>
              ))}
            {index === 1 &&
              wineSelectionNonSelected1.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name} - {e.note}/10
                </option>
              ))}
            {index === 2 &&
              wineSelectionNonSelected2.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name} - {e.note}/10
                </option>
              ))}
          </select>
          <p className="text-2xl font-bold text-tertiary">/10</p>
        </div>
        <div className="flex flex-row flex-end items-center">
          <p className="font-bold text-4xl"> - </p>
          <p className="font-bold mx-6 text-xl bg-secondary text-primary rounded-md flex px-4 justify-end items-center w-36 h-[54px]">
            150 ml
          </p>
          <p className="font-bold text-4xl"> + </p>
        </div>
      </div>
      <div className="flex flex-row justify-between px-8 items-center font-bold mt-2">
        <div className="flex flex-row justify-between w-64 px-8 items-center font-bold mt-2">
          <p>Dosage bouteille : </p>
          <p> 150 cl</p>
        </div>
        <div className="flex flex-row justify-between w-72 px-8 items-center font-bold mt-2">
          <p>Dosage échantillon : </p>
          <p> 80 %</p>
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
};
