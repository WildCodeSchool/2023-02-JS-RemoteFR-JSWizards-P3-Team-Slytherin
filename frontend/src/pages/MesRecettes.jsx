import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

export default function MesRecettes() {
  const { loggedInUser } = useUser();
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipeNumber, setRecipeNumber] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/recipes/all/detailed/${
          loggedInUser.id
        }`
      )
      .then((res) => {
        const newRecipeNumber = [];
        const { data } = res;
        data.forEach((e) => {
          if (!newRecipeNumber.includes(e.id_recipe)) {
            newRecipeNumber.push(e.id_recipe);
          }
        });
        setMyRecipes(data);
        setRecipeNumber(newRecipeNumber);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="text-secondary py-4">
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
                className="m-4 border-tertiary border-2 bg-primary rounded-md p-4 flex flex-row max-sm:hidden justify-between"
              >
                <div className="">
                  {myRecipes
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
                  {myRecipes
                    .filter((wine) => wine.id_recipe === recipe)
                    .map((e) => {
                      return <p key={e.id_wine}>{(e.dosage / 250) * 100}%</p>;
                    })}
                </div>
                <div className="text-right">
                  {myRecipes
                    .filter((wine) => wine.id_recipe === recipe)
                    .map((e) => {
                      return <p key={e.id_wine}>{(e.dosage / 250) * 750}ml</p>;
                    })}
                  <p>______</p>
                  <p>750ml</p>
                </div>
              </div>
              <div
                key={`r ${recipe}`}
                className="m-4 border-tertiary border-2 bg-primary rounded-md p-4 flex flex-col sm:hidden justify-between"
              >
                {myRecipes
                  .filter((wine) => wine.id_recipe === recipe)
                  .map((e) => {
                    return (
                      <p key={e.id_wine}>
                        {e.wineName} ({e.wineYear}) : {(e.dosage / 250) * 750}ml
                      </p>
                    );
                  })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
