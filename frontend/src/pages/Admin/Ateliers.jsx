import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useWorkshop } from "../../contexts/WorkshopContext";

export default function Ateliers() {
  const { workshopData, setWorkshopData } = useWorkshop();
  const [sortConfig, setSortConfig] = useState({
    key: "workshopDate",
    direction: "ascending",
  });

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...workshopData].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA === null || valueA === undefined) return -1;
      if (valueB === null || valueB === undefined) return 1;

      if (valueA < valueB) {
        return direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setWorkshopData(sortedData);
    setSortConfig({ key, direction });
  };

  const deleteWorkshop = async (rowData) => {
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/workshops/${rowData}`
    );
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/workshops`)
      .then((res) => {
        setWorkshopData(res.data);
      });
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/workshops`).then((res) => {
      setWorkshopData(res.data);
    });
  }, []);

  return (
    <>
      <h2 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer les ateliers
      </h2>

      <div className="flex flex-col gap-6">
        <Link to="/admin/ateliers/atelier" className="flex justify-center">
          <button type="button" className="self-center">
            Ajouter un atelier
          </button>
        </Link>
        <table className="w-full min-w-[280px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3 px-10">
              <th
                className="flex-1 min-w-[80px]"
                onClick={() => sortTable("workshopDate")}
              >
                Date{" "}
                {sortConfig.key === "workshopDate" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[200px] max-[1100px]:hidden"
                onClick={() => sortTable("personNb")}
              >
                Nb personnes{" "}
                {sortConfig.key === "personNb" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[70px]"
                onClick={() => sortTable("active")}
              >
                Statut{" "}
                {sortConfig.key === "active" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0 min-w-[70px]">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {workshopData.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 px-10 shadow-inner"
                key={e.id}
              >
                <td className="flex-1 min-w-[80px]">
                  {e.workshopDate.split("-").reverse().join("-")}
                </td>
                <td className="flex-1 min-w-[200px] max-[1100px]:hidden">
                  {e.personNb}
                </td>
                <td className="flex-1 font-bold min-w-[70px] ">
                  {e.active ? <p className="text-[green]">actif</p> : <p>-</p>}
                </td>

                <td className="flex-0 min-w-[70px] flew-row">
                  {" "}
                  <button
                    className="btn-list"
                    type="button"
                    onClick={() => deleteWorkshop(e.id)}
                  >
                    <img
                      className="w-4"
                      src="/assets/delete/delete.png"
                      alt={`supprimer l'atelier du' ${e.workshopDate}`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
