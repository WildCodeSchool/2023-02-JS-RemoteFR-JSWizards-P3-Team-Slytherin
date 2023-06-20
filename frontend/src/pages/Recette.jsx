import Layout from "@components/Layout";
import LigneRecette from "@components/recette/LigneRecette";

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
const aAssembler = resultatDegustation.sort(order);
const defaultSelection = [aAssembler[0], aAssembler[1], aAssembler[2]];

function Recette() {
  return (
    <Layout>
      <div className="text-secondary py-4">
        <p className="text-3xl text-center pt-4">Ma recette</p>
      </div>
      {defaultSelection.map((e, index) => (
        <LigneRecette key={e.id} aAssembler={aAssembler} index={index} />
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
