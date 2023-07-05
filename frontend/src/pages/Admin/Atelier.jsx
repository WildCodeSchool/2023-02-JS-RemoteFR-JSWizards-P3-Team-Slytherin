import { useState } from "react";
import data from "../../components/Data/data-wine-admin";

export default function Atelier() {
  const [selections, setSelections] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
  ]);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setDate(value);
    if (value && !/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      setError("");
    } else {
      setError("");
    }
  };
  const handleSelection = (text) => {
    const index = selections.findIndex((selection) => selection.value === "");
    if (index !== -1) {
      const newSelections = [...selections];
      newSelections[index].value = text;
      setSelections(newSelections);
    }
  };

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const wineHandleSubmit = (event) => event.preventDefault();
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    if (!filter && !search) return true;
    if (filter && item.color !== filter) return false;
    if (search && !item.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  return (
    <div className="container admin-container-atelier mt-8 mb-8 h-screen-108 overflow-y-auto">
      <h1 className="text-3xl font-black mb-12">Nouvel atelier</h1>
      <div className="flex">
        <div className="flex flex-col vertical-line">
          <div className="flex items-center mb-8">
            <div className="flex flex-row items-center max-w-full">
              <p>🔎</p>
              <form className="p-1" onSubmit={wineHandleSubmit}>
                <input
                  className="text-primary pl-1 rounded-md"
                  type="search"
                  placeholder="search"
                  onChange={handleSearchChange}
                />
              </form>
            </div>
            <div className="flex flex-col select-wine-container text-[0.8rem] ">
              <select
                onChange={handleFilterChange}
                className="filter ml-10 pl-1 rounded-md mr-4 px-2 border-2 "
              >
                <option value="" className="text-[0.8rem]">
                  Tous
                </option>
                <option value="rouge" className="text-[0.8rem]">
                  Rouge
                </option>
                <option value="blanc" className="text-[0.8rem]">
                  Blanc
                </option>
              </select>
            </div>
          </div>
          <ol className="list-decimal">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="flex items-center max-w-[15rem] justify-between mb-4"
              >
                {item.name}
                <button
                  className="btn-list"
                  type="button"
                  onClick={() => handleSelection(item.name)}
                >
                  <img
                    className="w-[1rem] h-[1rem] opacity-[50%]"
                    src="../../../public/assets/add/add.png"
                    alt="Ajouter à la sélection"
                  />
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="">
          <div>
            <div className="">
              <div className="flex ml-[37%] gap-4 mb-3">
                <label htmlFor="date" className="font-bold">
                  Date:
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="jj/mm/aaaa"
                  className="text-primary w-40 border-2 rounded text-center"
                  value={date}
                  onChange={handleChange}
                  pattern="\d{2}/\d{2}/\d{4}"
                />
                {error && <div className="text-red-500">{error}</div>}
              </div>
              <div className="flex gap-4 mb-6">
                <label htmlFor="people" className="font-bold whitespace-nowrap">
                  Nombre de personnes:
                </label>
                <input
                  type="number"
                  name="people"
                  id="people"
                  placeholder="Nbr de personnes"
                  className="text-primary w-40 border-2 rounded text-center"
                />
              </div>
            </div>
          </div>
          <div className="">
            {selections.map((selection, index) => (
              <div
                key={selection.id}
                className="selection flex justify-center gap-4 mb-6"
              >
                <h2
                  className={`bg-primary text-secondary w-[20rem] flex justify-center items-center ${
                    selection.value === "" ? "opacity-[50%]" : ""
                  }`}
                >
                  {selection.value || `SELECTION ${index + 1}`}
                </h2>
                {selection.value !== "" && (
                  <button
                    className="btn-list"
                    type="button"
                    onClick={() => {
                      const newSelections = [...selections];
                      newSelections[index].value = "";
                      setSelections(newSelections);
                    }}
                  >
                    <img
                      className={`w-4 opacity-[50%] ${
                        selection.value === "" ? "opacity-[50%]" : ""
                      }`}
                      src="../../../assets/delete/delete.png"
                      alt={`supprimer la selection ${index + 1}`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button type="button">Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
}
