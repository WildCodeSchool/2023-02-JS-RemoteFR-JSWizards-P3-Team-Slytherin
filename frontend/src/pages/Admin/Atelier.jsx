import { useState, useEffect } from "react";
import data from "../../components/Data/data-wine-admin";

function order(a, b) {
  const bandA = a.name;
  const bandB = b.name;
  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

export default function Atelier() {
  const [wineListOrdered] = useState(data.sort(order));
  const [wineListOrderedNonSelected, setWineListOrderedNonSelected] =
    useState(wineListOrdered);
  const [filter, setFilter] = useState("");
  const [selections, setSelections] = useState([
    { id: 1, value: "", year: 0 },
    { id: 2, value: "", year: 0 },
    { id: 3, value: "", year: 0 },
    { id: 4, value: "", year: 0 },
    { id: 5, value: "", year: 0 },
  ]);

  const newDate = new Date(
    new Date().getFullYear() + 1,
    new Date().getMonth(),
    new Date().getDate()
  );
  const todayDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );
  const formatedTodayDate = todayDate.toISOString().split("T")[0];
  const formattedDate = newDate.toISOString().split("T")[0];

  const handleSelection = (name, year) => {
    const index = selections.findIndex((selection) => selection.value === "");
    if (index !== -1) {
      const newSelections = [...selections];
      newSelections[index].value = name;
      newSelections[index].year = year;
      setSelections(newSelections);
    }
  };

  const deleteWine = (index) => {
    const newSelections = [...selections];
    newSelections[index].value = "";
    newSelections[index].year = 0;
    setSelections(newSelections);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const wineHandleSubmit = (event) => event.preventDefault();
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = wineListOrderedNonSelected.filter((item) => {
    if (!filter && !search) return true;
    if (filter && item.color !== filter) return false;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  useEffect(() => {
    const list = selections.map((s) => s.value + s.year);
    const newWineListOrdered = wineListOrdered.filter(
      (e) => !list.includes(e.name + e.year)
    );
    setWineListOrderedNonSelected(newWineListOrdered);
  }, [selections]);

  return (
    <div className="">
      <div className="flex max-md:flex-col justify-center">
        <div className="flex flex-col vertical-line md:w-1/2">
          <div className="flex">
            <div className="flex items-center max-md:flex-col justify-between m-4 p-1 w-full">
              <div className="flex items-center">
                <p>🔎</p>
                <form className="p-1" onSubmit={wineHandleSubmit}>
                  <input
                    className="text-primary h-7 w-28 pl-1 rounded-md"
                    type="search"
                    placeholder="search"
                    onChange={handleSearchChange}
                  />
                </form>
              </div>
              <select
                onChange={handleFilterChange}
                className="filter flex items-center p-1 h-7 rounded-md bg-secondary"
              >
                <option value="" className="">
                  Tous
                </option>
                <option value="rouge" className="">
                  Rouge
                </option>
                <option value="blanc" className="">
                  Blanc
                </option>
              </select>
            </div>
          </div>
          <ul className="mr-3">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="flex items-center w-full justify-between my-6 gap-x-4"
              >
                {item.name} ({item.year})
                <button
                  className="btn-list mr-4"
                  type="button"
                  onClick={() => handleSelection(item.name, item.year)}
                >
                  <img
                    className="w-[1rem] h-[1rem] opacity-[50%]"
                    src="../../../public/assets/add/add.png"
                    alt="Ajouter à la sélection"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl font-black mb-12 mt-4">Nouvel atelier</h1>

          <div className="flex items-center justify-end m-4">
            <label htmlFor="date" className="font-bold">
              Date:
              <input
                type="date"
                name="date"
                id="date"
                min={formatedTodayDate}
                max={formattedDate}
                className="text-primary p-1 rounded  w-36 ml-4"
              />
            </label>
          </div>
          <div className="flex items-center justify-end">
            <label htmlFor="people" className="font-bold">
              Nb personnes :
              <input
                type="number"
                name="people"
                id="people"
                placeholder="Nb personnes"
                className="text-primary p-1 rounded w-36 mx-4"
              />
            </label>
          </div>

          <div className="mt-16">
            {selections.map((selection, index) => (
              <div
                key={selection.id}
                className="selection flex justify-start gap-4 my-6"
              >
                <h2
                  className={`bg-primary text-secondary w-60 flex justify-center items-center ${
                    selection.value === "" ? "opacity-[50%]" : ""
                  }`}
                >
                  {selection.value
                    ? `${selection.value} (${selection.year})`
                    : `SELECTION ${index + 1}`}
                </h2>
                <div className="flex items-center px-4">
                  <button
                    className="btn-list"
                    type="button"
                    onClick={() => deleteWine(index)}
                  >
                    <img
                      className="w-4"
                      src="../../../assets/delete/delete.png"
                      alt={`supprimer la selection ${index + 1}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            <button type="button">Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
}
