import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useWorkshop } from "../../contexts/WorkshopContext";

function order(a, b) {
  const bandA = a.id;
  const bandB = b.id;
  let comparison = 0;
  if (bandA < bandB) {
    comparison = 1;
  } else if (bandA > bandB) {
    comparison = -1;
  }
  return comparison;
}

export default function Atelier() {
  const { setWorkshopData } = useWorkshop();
  const [workshop, setWorkshop] = useState({
    active: 0,
    workshopDate: 0,
    personNb: 0,
  });
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wineListOrdered, setWineListOrdered] = useState([]);
  const [wineListOrderedNonSelected, setWineListOrderedNonSelected] = useState(
    []
  );
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  // chargement de la data //
  useEffect(() => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/wines`;
    axios
      .get(API)
      .then((res) => {
        setWineListOrdered(res.data.sort(order));
        setWineListOrderedNonSelected(res.data.sort(order));
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Format date //
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

  // Ajout dans selection et retrait dans liste //
  const handleSelection = (id) => {
    const newSelection = selection;
    if (selection.length < 5) {
      newSelection.push(wineListOrdered.filter((e) => e.id === id)[0]);
    }
    const list = newSelection.map((s) => s.id);
    const newWineListOrderedNonSelected = wineListOrdered.filter(
      (e) => !list.includes(e.id)
    );
    setSelection(newSelection);
    setWineListOrderedNonSelected(newWineListOrderedNonSelected);
  };
  // Suppression dans selection et ajout dans liste //
  const deleteWine = (id) => {
    const newSelection = selection.filter((e) => e.id !== Number(id));
    const list = newSelection.map((s) => s.id);
    const newWineListOrderedNonSelected = wineListOrdered.filter(
      (e) => !list.includes(e.id)
    );
    setSelection(newSelection);
    setWineListOrderedNonSelected(newWineListOrderedNonSelected);
  };

  // Mise à jour de la liste avec les filtres //
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const wineHandleSubmit = (event) => event.preventDefault();
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const nextFilteredData = wineListOrderedNonSelected.filter((item) => {
      if (!filter && !search) return true;
      if (filter && item.wineType !== filter) return false;
      if (search && !item.wineName.toLowerCase().includes(search.toLowerCase()))
        return false;
      return true;
    });
    setFilteredData(nextFilteredData);
  }, [wineListOrderedNonSelected, filter, search]);

  // mise à jour workshop
  const handleChangeDate = (e) => {
    const newWorkshop = workshop;
    newWorkshop.workshopDate = e.target.value;
    setWorkshop(newWorkshop);
  };
  const handleChangePerson = (e) => {
    const newWorkshop = workshop;
    newWorkshop.personNb = e.target.value;
    setWorkshop(newWorkshop);
  };
  const handleChangeActive = (e) => {
    const newWorkshop = workshop;
    newWorkshop.active = Number(e.target.value);
    setWorkshop(newWorkshop);
  };

  // Enregistrer un nouvel atelier
  const updateAllWorkshopInactive = async () => {
    await axios.put(`${import.meta.env.VITE_BACKEND_URL}/workshops/inactive`);
  };
  const registerWorkshop = async () => {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/workshops/creation`,
      workshop
    );
    const workshopList = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/workshops`
    );
    const { data } = workshopList;
    const workshopId = data[data.length - 1].id;
    const wineWorkshop = {
      idworkshop1: workshopId,
      idwine1: null,
      idworkshop2: workshopId,
      idwine2: null,
      idworkshop3: workshopId,
      idwine3: null,
      idworkshop4: workshopId,
      idwine4: null,
      idworkshop5: workshopId,
      idwine5: null,
    };
    if (selection.length >= 1) {
      wineWorkshop.idwine1 = selection[0].id;
      if (selection.length >= 2) {
        wineWorkshop.idwine2 = selection[1].id;
        if (selection.length >= 3) {
          wineWorkshop.idwine3 = selection[2].id;
          if (selection.length >= 4) {
            wineWorkshop.idwine4 = selection[3].id;
            if (selection.length >= 5) {
              wineWorkshop.idwine5 = selection[4].id;
            }
          }
        }
      }
    }
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/wineWorkshop`,
      wineWorkshop
    );
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/workshops`)
      .then((res) => {
        setWorkshopData(res.data);
      });
  };

  const handleClickValider = () => {
    if (workshop.personNb > 0 && workshop.workshopDate !== 0) {
      try {
        if (workshop.active === 1) updateAllWorkshopInactive();
        registerWorkshop();
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (isLoading) <p>Loading...</p>;

  return (
    <div className="">
      <div className="flex max-md:flex-col justify-center bg-secondary mt-4">
        <div className="flex flex-col vertical-line md:w-1/2">
          <div className="flex">
            <div className="flex items-center max-md:flex-col justify-between m-4 p-1 w-full">
              <div className="flex items-center">
                <p>🔎</p>
                <form className="p-1" onSubmit={wineHandleSubmit}>
                  <input
                    className="text-primary h-7 w-28 pl-1 rounded-md border-tertiary border-2"
                    type="search"
                    placeholder="search"
                    onChange={handleSearchChange}
                  />
                </form>
              </div>
              <select
                onChange={handleFilterChange}
                className="filter flex items-center p-1 h-7 rounded-md border-tertiary border-2"
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
                {item.wineName} ({item.wineYear})
                <button
                  className="btn-list mr-4"
                  type="button"
                  onClick={() => handleSelection(item.id)}
                >
                  <img
                    className="w-[1rem] h-[1rem] opacity-[50%]"
                    src="/assets/add/add.png"
                    alt="Ajouter à la sélection"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-3xl font-black mb-12 mt-4">Nouvel atelier</h1>
          <div className="flex justify-end m-4">
            <label htmlFor="date" className="font-bold text-right pr-4">
              Date:
              <input
                onChange={handleChangeDate}
                type="date"
                name="date"
                id="date"
                min={formatedTodayDate}
                max={formattedDate}
                className="text-primary p-1 rounded w-36 ml-4 border-tertiary border-2"
              />
            </label>
          </div>
          <div className="flex justify-end mb-4">
            <label htmlFor="people" className="font-bold text-right pr-4">
              Nb pers. :
              <input
                onChange={handleChangePerson}
                type="number"
                name="people"
                id="people"
                placeholder="Nb personnes"
                className="text-primary p-1 rounded w-36 mx-4 border-tertiary border-2"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <label htmlFor="people" className="font-bold text-right pr-4">
              Activation :
              <select
                onChange={handleChangeActive}
                className="font-bold text-primary p-1 rounded w-36 mx-4 border-tertiary border-2"
              >
                <option value="0" className="">
                  Inactive
                </option>
                <option value="1" className="">
                  Active
                </option>
              </select>
            </label>
          </div>

          <div className="mt-16">
            {selection.map((wine) => (
              <div
                key={wine.id}
                className="selection flex justify-start gap-4 my-6"
              >
                <h2
                  className={`bg-primary text-secondary w-60 flex justify-center items-center ${
                    wine.wineName === "" ? "opacity-[50%]" : ""
                  }`}
                >
                  {`${wine.wineName} (${wine.wineYear})`}
                </h2>
                <div className="flex items-center px-4">
                  <button
                    className="btn-list"
                    type="button"
                    onClick={() => deleteWine(wine.id)}
                  >
                    <img
                      className="w-4"
                      src="/assets/delete/delete.png"
                      alt={`supprimer la selection ${wine.wineName}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-8">
            <Link to="/admin/ateliers">
              <button type="button" onClick={handleClickValider}>
                Valider
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
