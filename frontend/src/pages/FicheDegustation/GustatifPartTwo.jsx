import { useEffect, useState } from "react";
import VinEnCours from "@components/VinEnCours";
import Select from "react-select";
import { useChoice } from "@contexts/ChoiceContext";
import options from "../../helpers/gustatifHelper";

export default function GustatifPartTwo() {
  const {
    selectBoucheFruit,
    selectBoucheFleur,
    selectBoucheVegetal,
    selectBoucheEpice,
    selectBoucheAmpyreumatique,
    selectBoucheMineral,
    setSelectBoucheFruit,
    setSelectBoucheFleur,
    setSelectBoucheVegetal,
    setSelectBoucheEpice,
    setSelectBoucheAmpyreumatique,
    setSelectBoucheMineral,
  } = useChoice();

  const [test, setTest] = useState({});

  const handleFruitChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheFruit(string);
    console.info(string);
  };

  const handleFleurChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheFleur(string);
    console.info(string);
  };

  const handleVegetalChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheVegetal(string);
    console.info(string);
  };

  const handleEpiceChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheEpice(string);
    console.info(string);
  };

  const handleAmpyrChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheAmpyreumatique(string);
    console.info(string);
  };

  const handleMineralChange = (value) => {
    let string = "";
    for (let i = 0; i < value.length; i += 1) {
      if (i === 0) {
        string += `${value[i].value}`;
      } else {
        string += `, ${value[i].value}`;
      }
    }
    setSelectBoucheMineral(string);
    console.info(string);
  };

  const handleTest = (e) => {
    e.preventDefault();
    setTest({
      fruit: selectBoucheFruit,
      fleur: selectBoucheFleur,
      vegetal: selectBoucheVegetal,
      epice: selectBoucheEpice,
      ampyreumatique: selectBoucheAmpyreumatique,
      mineral: selectBoucheMineral,
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
        <div>Caractère gustatif 2/2</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <div className="w-full flex flex-col gap-1">
          <div>Fruit</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFruitChange}
          />
          <div className="mt-2">Fleur</div>
          <Select
            isMulti
            name="fleur"
            options={options.fleurRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFleurChange}
          />
          <div className="mt-2">Végétal</div>
          <Select
            isMulti
            name="vegetal"
            options={options.vegetalRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleVegetalChange}
          />
          <div className="mt-2">Épice</div>
          <Select
            isMulti
            name="epice"
            options={options.epiceRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleEpiceChange}
          />
          <div className="mt-2">Ampyreumatique</div>
          <Select
            isMulti
            name="ampyr"
            options={options.ampyreumatiqueRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleAmpyrChange}
          />
          <div className="mt-2">Minéral</div>
          <Select
            isMulti
            name="mineral"
            options={options.mineralRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleMineralChange}
          />
        </div>
        <button type="button" onClick={handleTest}>
          Test
        </button>
      </div>
    </>
  );
}
