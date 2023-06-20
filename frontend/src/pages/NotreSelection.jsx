import { Link } from "react-router-dom";
import data from "../components/Data/data-wine";

export default function NotreSelection() {
  return (
    <>
      <h2 className="text-center font-bold text-2xl p-12 text-secondary">
        Notre sélection de vins
      </h2>

      <div className="flex gap-14 flex-wrap justify-center">
        {data.map((wine) => (
          <div key={wine.id}>
            <img
              className="object-cover w-[160px] h-[187px] rounded-t-xl"
              src={wine.image}
              alt={wine.name}
            />

            <h3 className="bg-secondary rounded-b-xl text-primary max-w-[160px] h-[72px] text-center p-2 flex flex-col justify-center">
              {wine.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link to="/profil/profil_degustation">
          <button type="button" className="m-12">
            Profil dégustation
          </button>
        </Link>
      </div>
    </>
  );
}
