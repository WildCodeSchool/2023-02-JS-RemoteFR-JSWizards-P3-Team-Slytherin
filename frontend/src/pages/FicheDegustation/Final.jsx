import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useChoice } from "@contexts/ChoiceContext";
import VinEnCours from "@components/VinEnCours";

export default function Final() {
  const { selectNote, setSelectNote } = useChoice();

  const [test, setTest] = useState({});

  const handleTest = (e) => {
    e.preventDefault();
    setTest({
      note: selectNote,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSelectNote(e.target.value);
  };

  useEffect(() => {
    console.info(test);
  }, [test]);

  return (
    <>
      <VinEnCours />
      <div className="mt-4 flex flex-col items-center">
        <span className="w-full h-[1px] bg-secondary m-4" />
        <div>Note Finale</div>
        <span className="w-full h-[1px] bg-secondary m-4 " />
        <div className="flex items-center justify-center flex-wrap gap-4 md:w-[620px]">
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={1}
          >
            1
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={2}
          >
            2
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={3}
          >
            3
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={4}
          >
            4
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={5}
          >
            5
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={6}
          >
            6
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={7}
          >
            7
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={8}
          >
            8
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={9}
          >
            9
          </button>
          <button
            className="note-button"
            type="button"
            onClick={handleClick}
            value={10}
          >
            10
          </button>
        </div>
        <div className="my-4">Note {selectNote}/10</div>
        <div className="w-full flex justify-center gap-4 my-4">
          <Link to="/selection">
            <button type="button">Retour au catalogue</button>
          </Link>
          <Link to="/fiche/gustatif-part2">
            <button type="button" className="items-center">
              Précédent
            </button>
          </Link>
          <Link to="/fiche">
            <button type="button">Valider</button>
          </Link>
        </div>
        <button type="button" onClick={handleTest}>
          Test
        </button>
      </div>
    </>
  );
}
