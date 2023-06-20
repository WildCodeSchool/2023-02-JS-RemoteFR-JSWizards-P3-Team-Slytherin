import { Link } from "react-router-dom";
import data from "../components/Data/data-wine";

function HistoriqueFiches() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl p-8 text-center">
        Historique des dégustations
      </h2>
      <h3 className="p-3 text-lg">Dégustation du 15/06/2023</h3>
      <hr className="w-[250px] pb-12" />
      <div className="flex gap-14 flex-wrap justify-center">
        {data.map((wine) => (
          <div key={wine.id}>
            <img
              className="object-cover w-[160px] h-[187px] rounded-t-xl"
              src={wine.image}
              alt={wine.name}
            />
            <div className="bg-secondary text-primary text-center rounded-b-xl p-2 h-[108px] flex flex-col max-w-[160px] justify-center">
              <h3>{wine.name}</h3>
              <h4 className="text-tertiary">{wine.note}</h4>
            </div>
          </div>
        ))}
      </div>
      <Link to="/profil">
        <button className="mt-8" type="button">
          Retour profil
        </button>
      </Link>
    </div>
  );
}

export default HistoriqueFiches;
