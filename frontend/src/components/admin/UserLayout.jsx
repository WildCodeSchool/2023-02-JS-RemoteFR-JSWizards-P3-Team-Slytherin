import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UserLayout({ hidden, setHidden, selectedRowData }) {
  const [userRecipes, setUserRecipes] = useState([]);
  const [recipeNumber, setRecipeNumber] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/recipes/all/detailed/${selectedRowData}`
      )
      .then((res) => {
        const newRecipeNumber = [];
        const { data } = res;
        data.forEach((e) => {
          if (!newRecipeNumber.includes(e.id_recipe)) {
            newRecipeNumber.push(e.id_recipe);
          }
        });
        setUserRecipes(data);
        setRecipeNumber(newRecipeNumber);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [hidden]);

  function deleteRecipe(id) {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/recipeWine/${id}`)
      .then(() => {
        setHidden(!hidden);
      })
      .catch((err) => console.error(err));
  }

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setHidden(!hidden);
    }
  }

  const handleParentClick = (e) => {
    if (e.target === e.currentTarget) {
      setHidden(!hidden);
    }
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={`${!hidden ? "hidden" : ""}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="fullscreen-overlay bg-primary"
        onClick={handleParentClick}
      >
        <div className="rounded bg-secondary h-[80%] w-[80%] p-5 flex flex-col items-center cursor-default overflow-scroll">
          <section className="flex flex-col w-full gap-4">
            <div className="text-primary py-4">
              <p className="text-3xl text-center pt-4 md:portrait:pt-12">
                Mes recettes
              </p>
            </div>
            <div className="flex flex-col">
              {recipeNumber.map((recipe) => {
                return (
                  <>
                    <div
                      key={recipe}
                      className="m-4 border-tertiary border-2 rounded-md p-4 flex flex-row max-sm:hidden justify-between"
                    >
                      <div className="">
                        {userRecipes
                          .filter((wine) => wine.id_recipe === recipe)
                          .map((e) => {
                            return (
                              <p key={e.id_wine}>
                                {e.wineName} ({e.wineYear})
                              </p>
                            );
                          })}
                      </div>
                      <div className="text-right">
                        {userRecipes
                          .filter((wine) => wine.id_recipe === recipe)
                          .map((e) => {
                            return (
                              <p key={e.id_wine}>
                                {Math.round((e.dosage / 250) * 100)}%
                              </p>
                            );
                          })}
                      </div>
                      <div className="text-right">
                        {userRecipes
                          .filter((wine) => wine.id_recipe === recipe)
                          .map((e) => {
                            return (
                              <p key={e.id_wine}>
                                {Math.round((e.dosage / 250) * 750)}ml
                              </p>
                            );
                          })}
                        <p>______</p>
                        <p>750ml</p>
                      </div>
                      <button
                        className="btn-list"
                        type="button"
                        onClick={() => deleteRecipe(recipe)}
                      >
                        <img
                          className="w-4"
                          src="/assets/delete/delete.png"
                          alt={`supprimer l'atelier du' ${recipe}`}
                        />
                      </button>
                    </div>
                    <div
                      key={`r ${recipe}`}
                      className="m-4 border-tertiary border-2 rounded-md p-4 flex flex-col sm:hidden justify-between"
                    >
                      <button
                        className="btn-list"
                        type="button"
                        onClick={() => deleteRecipe(recipe)}
                      >
                        <img
                          className="w-4"
                          src="/assets/delete/delete.png"
                          alt={`supprimer l'atelier du' ${recipe}`}
                        />
                      </button>
                      {userRecipes
                        .filter((wine) => wine.id_recipe === recipe)
                        .map((e) => {
                          return (
                            <p key={e.id_wine}>
                              {e.wineName} ({e.wineYear}) :{" "}
                              {Math.round((e.dosage / 250) * 750)}ml
                            </p>
                          );
                        })}
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

UserLayout.propTypes = {
  selectedRowData: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
  setHidden: PropTypes.func.isRequired,
};
