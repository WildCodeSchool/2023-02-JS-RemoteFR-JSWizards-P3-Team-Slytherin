import PropTypes from "prop-types";
import { useState } from "react";

function LigneRecette({ aAssembler, index }) {
  const [selectedWine, setSelectedWine] = useState("");

  function handleChange(e) {
    setSelectedWine(e.target.value);
  }

  console.warn({ selectedWine });

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
            {aAssembler.map((e) => (
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
  aAssembler: PropTypes.arrayOf(PropTypes.shape).isRequired,
  index: PropTypes.number.isRequired,
};
