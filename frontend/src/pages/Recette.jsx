import Layout from "@components/Layout";
import LigneRecette from "@components/recette/LigneRecette";
import { useState } from "react";

const resultatDegustation = [
  {
    id: 1,
    name: "Négrette",
    note: 8,
  },
  {
    id: 2,
    name: "Scicarello",
    note: 4,
  },
  {
    id: 3,
    name: "Maccabeu",
    note: 6,
  },
  {
    id: 4,
    name: "Auxerrois",
    note: 7,
  },
  {
    id: 5,
    name: "Mourvèdre",
    note: 6,
  },
];

function order(a, b) {
  const bandA = a.note;
  const bandB = b.note;
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

function Recette() {
  const [wineSelectionOrderByNote] = useState(resultatDegustation.sort(order));
  const [defaultSelection] = useState([
    wineSelectionOrderByNote[0],
    wineSelectionOrderByNote[1],
    wineSelectionOrderByNote[2],
  ]);
  const [selectedWines, setSelectedWines] = useState(["", "", ""]);
  const [wineSelectionNonSelected0, setWineSelectionNonSelected0] = useState(
    wineSelectionOrderByNote
  );
  const [wineSelectionNonSelected1, setWineSelectionNonSelected1] = useState(
    wineSelectionOrderByNote
  );
  const [wineSelectionNonSelected2, setWineSelectionNonSelected2] = useState(
    wineSelectionOrderByNote
  );

  return (
    <Layout>
      <div className="text-secondary py-4">
        <p className="text-3xl text-center pt-4">Ma recette</p>
      </div>
      {defaultSelection.map((e, index) => (
        <LigneRecette
          key={e.id}
          wineSelectionOrderByNote={wineSelectionOrderByNote}
          index={index}
          selectedWines={selectedWines}
          setSelectedWines={setSelectedWines}
          wineSelectionNonSelected0={wineSelectionNonSelected0}
          setWineSelectionNonSelected0={setWineSelectionNonSelected0}
          wineSelectionNonSelected1={wineSelectionNonSelected1}
          setWineSelectionNonSelected1={setWineSelectionNonSelected1}
          wineSelectionNonSelected2={wineSelectionNonSelected2}
          setWineSelectionNonSelected2={setWineSelectionNonSelected2}
        />
      ))}
      <div className="flex flex-col xl:mx-20">
        <div className="flex flex-row justify-between pt-16">
          <button type="button">Profil dégustation</button>
          <button type="button">Valider</button>
        </div>
      </div>
    </Layout>
  );
}

export default Recette;