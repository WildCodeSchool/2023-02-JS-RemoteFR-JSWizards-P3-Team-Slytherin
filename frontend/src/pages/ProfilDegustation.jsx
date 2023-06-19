import { Link } from "react-router-dom";
import data from "../components/Data/data-wine";

export default function ProfilDegustation() {
  return (
    <div>
      <div className="text-secondary p-[1.5rem] sm:px-[3.2rem] md:px-[6.4rem] min-[950px]:px-[7.5rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl pb-[2rem]">Profil dégustation</h2>
        </div>
        {data.map((wine) => (
          <>
            <h3 className="text-xl pb-2 mt-4 font-bold">{wine.name}</h3>
            <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between ">
              <p>{wine.resume}</p>
              <span className="text-tertiary pl-1 ml-4 text-xl">
                {wine.note}
              </span>
            </div>
          </>
        ))}
        <div className="flex flex-row justify-around items-center py-[3rem]">
          <Link to="/selection">
            <button type="button" className="self-center mt-2 h-12">
              Retour à la sélection
            </button>
          </Link>
          <Link to="/recette">
            <button type="button" className="self-center mt-2 h-12">
              Recette
            </button>
          </Link>
        </div>
      </div>
      <h3 className="text-xl pb-2 mt-4 font-bold">Premier cépage</h3>
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem
          ex eos laudantium maxime voluptatem libero tempora sunt nisi quisquam
          sint odio velit ipsa eaque facere architecto similique, delectus aut.
        </p>
        <span className="text-tertiary pl-1 ml-4 text-xl">8/10</span>
      </div>
      <h3 className="text-xl pb-2 mt-4 font-bold">Deuxième cépage</h3>
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem
          ex eos laudantium maxime voluptatem libero tempora sunt nisi quisquam
          sint odio velit ipsa eaque facere architecto similique, delectus aut.
        </p>
        <span className="text-tertiary pl-1 ml-4 text-xl">4/10</span>
      </div>
      <h3 className="text-xl pb-2 mt-4 font-bold">Troisième cépage</h3>
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem
          ex eos laudantium maxime voluptatem libero tempora sunt nisi quisquam
          sint odio velit ipsa eaque facere architecto similique, delectus aut.
        </p>
        <span className="text-tertiary pl-1 ml-4 text-xl">8/10</span>
      </div>
      <h3 className="text-xl pb-2 mt-4 font-bold">Quatrième cépage</h3>
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum autem
          ex eos laudantium maxime voluptatem libero tempora sunt nisi quisquam
          sint odio velit ipsa eaque facere architecto similique, delectus aut.
        </p>
        <span className="text-tertiary pl-1 ml-4 text-xl">2/10</span>
      </div>
      <div className="flex flex-row justify-around items-center py-[1.8rem]">
        <Link to="/selection">
          <button type="button" className="self-center mt-2 h-12">
            Retour à la sélection
          </button>
        </Link>
        <Link to="/">
          <button type="button" className="self-center mt-2 h-12">
            Recette
          </button>
        </Link>
      </div>
    </div>
  );
}
