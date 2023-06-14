import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import data from "../components/Data/data-wine";

export default function NotreSelection() {
  return (
    <Layout>
      <h2 className="text-center font-bold text-2xl p-12 text-secondary">
        Notre sélection de vins
      </h2>

      <div className="flex sm:mx-10 gap-14 flex-wrap justify-center md:mx-24 md:gap-24 lg:mx-48 lg:gap-24">
        {data.map((wine) => (
          <div key={wine.id}>
            <img
              className="object-cover w-[104px] h-[144px]"
              src={wine.image}
              alt={wine.name}
            />
            <h3>{wine.name}</h3>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Link to="/profil/profil_degustation">
          <button
            type="button"
            className="bg-tertiary text-primary m-14 font-bold p- rounded-full text-xs text-center"
          >
            Profil dégustation
          </button>
        </Link>
      </div>
    </Layout>
  );
}
