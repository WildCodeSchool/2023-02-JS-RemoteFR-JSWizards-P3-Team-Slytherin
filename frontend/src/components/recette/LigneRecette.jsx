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
  dosage,
  setDosage,
  dosageTotal,
  setDosageTotal,
  dosage100,
  setDosage100,
  dosage75cl,
  setDosage75cl,
}) {
  function handleChange(e) {
    const nextSelectedWines = selectedWines.map((selected, i) => {
      if (Number(e.target.id) === i) {
        const [wineObject] = wineSelectionOrderByNote.filter(
          (wine) => e.target.value === wine.name
        );
        return wineObject;
      }
      return selected;
    });
    setSelectedWines(nextSelectedWines);
  }
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
  function decDosage(event) {
    const nextDosage = dosage.map((e, i) => {
      if (Number(event.target.id) === i) {
        return e - 5;
      }
      return e;
    });
    setDosage(nextDosage);
  }
  function incDosage(event) {
    const nextDosage = dosage.map((e, i) => {
      if (Number(event.target.id) === i) {
        return e + 5;
      }
      return e;
    });
    setDosage(nextDosage);
  }
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
      <div className="flex flex-row justify-between items-center w-full mt-12">
        {/* SelectMenu */}
        <div className="flex flex-row justify-between items-center w-1/2">
          <select
            onChange={handleChange}
            className="recetteSelect"
            id={`${index}`}
          >
            <option className="recetteOption" value="">
              -Vide-
            </option>
            {index === 0 &&
              wineSelectionNonSelected0.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name === selectedWines[0].name
                    ? e.name
                    : `${e.name} - ${e.note}/10`}
                </option>
              ))}
            {index === 1 &&
              wineSelectionNonSelected1.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name === selectedWines[1].name
                    ? e.name
                    : `${e.name} - ${e.note}/10`}
                </option>
              ))}
            {index === 2 &&
              wineSelectionNonSelected2.map((e) => (
                <option key={e.id} className="recetteOption" value={e.name}>
                  {e.name === selectedWines[2].name
                    ? e.name
                    : `${e.name} - ${e.note}/10`}
                </option>
              ))}
          </select>
          <p className="text-2xl font-bold text-tertiary">
            {selectedWines[index] && `${selectedWines[index].note} /10`}
          </p>
        </div>
        {/* dosage */}
        <div className="recetteButtons flex flex-row justify-center items-center">
          {dosage[index] - 5 >= 0 ? (
            <button type="submit" onClick={decDosage} id={index}>
              -
            </button>
          ) : (
            <p className="font-bold text-4xl text-[grey] text-opacity-100">-</p>
          )}
          <p className="font-bold mx-6 text-xl bg-secondary text-primary rounded-md flex px-4 justify-end items-center w-28 h-[54px]">
            {`${dosage[index]} ml`}
          </p>
          {dosage.reduce((a, b) => a + b, 0) + 5 <= 250 ? (
            <button type="submit" onClick={incDosage} id={index}>
              +
            </button>
          ) : (
            <p className="font-bold text-4xl text-[grey] text-opacity-100">+</p>
          )}
        </div>
      </div>
      {/* calculs dosages */}
      <div className="flex flex-row justify-between px-8 items-center font-bold mt-2">
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
};
