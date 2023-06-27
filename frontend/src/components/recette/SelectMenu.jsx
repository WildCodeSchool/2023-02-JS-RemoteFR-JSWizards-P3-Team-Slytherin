import PropTypes from "prop-types";

function SelectMenu({
  index,
  wineSelectionNonSelected0,
  wineSelectionNonSelected1,
  wineSelectionNonSelected2,
  selectedWines,
  setSelectedWines,
  wineSelectionOrderByNote,
  defaultObject,
}) {
  // {* selectedWine rassemble les vins selectionnés dans les menus déroulants *}
  function handleChange(e) {
    const nextSelectedWines = selectedWines.map((selected, i) => {
      if (Number(e.target.id) === i) {
        if (e.target.value === defaultObject.name) {
          return { defaultObject };
        }
        const [wineObject] = wineSelectionOrderByNote.filter(
          (wine) => e.target.value === wine.name
        );
        return wineObject;
      }
      return selected;
    });
    setSelectedWines(nextSelectedWines);
  }
  return (
    <div className="flex flex-row justify-between max-md:items-start md:items-center max-md:w-full md:w-1/2">
      <select onChange={handleChange} className="recetteSelect" id={`${index}`}>
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
      <p className="text-2xl max-md:hidden font-bold text-tertiary">
        {selectedWines[index].note && `${selectedWines[index].note}/10`}
      </p>
      <p className="text-2xl ml-4 md:hidden font-bold text-tertiary">
        {selectedWines[index].note && `${selectedWines[index].note}`}/10
      </p>
    </div>
  );
}

export default SelectMenu;

SelectMenu.propTypes = {
  index: PropTypes.number.isRequired,
  selectedWines: PropTypes.arrayOf(PropTypes.shape).isRequired,
  wineSelectionNonSelected0: PropTypes.arrayOf(PropTypes.shape).isRequired,
  wineSelectionNonSelected1: PropTypes.arrayOf(PropTypes.shape).isRequired,
  wineSelectionNonSelected2: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setSelectedWines: PropTypes.func.isRequired,
  wineSelectionOrderByNote: PropTypes.arrayOf(PropTypes.shape).isRequired,
  defaultObject: PropTypes.shape({
    name: PropTypes.string,
    note: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};
