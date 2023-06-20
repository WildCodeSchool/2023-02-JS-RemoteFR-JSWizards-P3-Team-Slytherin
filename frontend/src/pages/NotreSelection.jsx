import { Link } from "react-router-dom";
import data from "../components/Data/data-wine";

export default function NotreSelection() {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl p-12 text-secondary">
        Notre sélection de vins
      </h2>

      <div className="flex sm:mx-10 gap-14 flex-wrap justify-center md:mx-24 md:gap-24 lg:mx-42 lg:gap-20">
        {data.map((wine) => (
          <div key={wine.id}>
            <img
              className="object-cover w-[160px] h-[187px] rounded-t-xl"
              src={wine.image}
              alt={wine.name}
            />

            <h3 className="bg-secondary rounded-b-xl text-primary text-center p-2">
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
    </div>
  );
}
