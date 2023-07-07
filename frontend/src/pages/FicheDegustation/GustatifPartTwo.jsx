import { useEffect, useState } from "react";
import VinEnCours from "@components/VinEnCours";
import Select from "react-select";
import options from "../../helpers/gustatifHelper";

export default function GustatifPartTwo() {
  const [gustatif2, setGustatif2] = useState({});

  const handleFruitChange = (value) => {
    setGustatif2({ ...gustatif2, fruit: value });
  };

  const handleFruitBlancChange = (value) => {
    setGustatif2({ ...gustatif2, fruitBlanc: value });
  };

  useEffect(() => {
    // console.log(gustatif2), [gustatif2];
  });

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Caractère gustatif 2/2</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <div className="w-full flex flex-col gap-1">
          <div>Fruit (rouge)</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitRougeOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFruitChange}
          />
          <div className="mt-2">Fruit (blanc)</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitBlancOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
            onChange={handleFruitBlancChange}
          />
          <div className="mt-2">Fruit (blanc)</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitBlancOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
          />
          <div className="mt-2">Fruit (blanc)</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitBlancOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
          />
          <div className="mt-2">Fruit (blanc)</div>
          <Select
            isMulti
            name="fruit"
            options={options.fruitBlancOptions}
            className="basic-multi-select text-primary"
            classNamePrefix="select"
          />
        </div>
      </div>
    </>
  );
}
