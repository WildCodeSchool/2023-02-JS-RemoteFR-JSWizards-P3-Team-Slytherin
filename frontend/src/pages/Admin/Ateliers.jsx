import { useEffect, useState } from "react";
import axios from "axios";
import AtelierLayout from "@components/admin/AtelierLayout";
import { useWorkshop } from "../../contexts/WorkshopContext";
import WorkshopDetailsLayout from "../../components/admin/WorkshopDetailsLayout";

export default function Ateliers() {
  const { workshopData, setWorkshopData } = useWorkshop();
  const [hiddenDetails, setHiddenDetails] = useState(false);
  const [selectedDetailedWorkshop, setSelectedDetailedWorkshop] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "workshopDate",
    direction: "ascending",
  });
  const [hidden, setHidden] = useState(false);
  const [refresh, setRefresh] = useState(false);

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

  const handleWorkshop = () => {
    setHidden(!hidden);
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

  const handleClickDetails = async (id) => {
    const API = `${import.meta.env.VITE_BACKEND_URL}/wineWorkshop/${id}`;
    await axios
      .get(API)
      .then((res) => {
        setSelectedDetailedWorkshop(res.data);
        setHiddenDetails(true);
      })
      .catch((err) => console.error(err));
  };

  const handleActive = async (rowData) => {
    const updatedRowData = { ...rowData };
    updatedRowData.active = rowData.active === 0 ? 1 : 0;

    await axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/workshops/inactive`, {})
      .catch((err) => console.error(err));
    await axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/workshops/${updatedRowData.id}`,
        updatedRowData
      )
      .catch((err) => console.error(err));
    setSelectedRowData(updatedRowData);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/workshops`).then((res) => {
      setWorkshopData(res.data);
    });
  }, [selectedRowData, refresh]);

  return (
    <>
      <h2 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer les ateliers
      </h2>
      <div className="flex flex-col gap-6">
        <button type="button" onClick={handleWorkshop} className="self-center">
          Ajouter un atelier
        </button>
        <table className="w-full min-w-[280px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3 px-10">
              <th
                className="flex-[0] min-w-[45px]"
                onClick={() => sortTable("id")}
              >
                N°{" "}
                {sortConfig.key === "id" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[80px]"
                onClick={() => sortTable("workshopDate")}
              >
                Date{" "}
                {sortConfig.key === "workshopDate" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[120px]"
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
              <th className="flex-0 min-w-[90px]">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {workshopData.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 px-10 shadow-inner"
                key={e.id}
              >
                <td className="flex-[0] min-w-[45px]">
                  <button
                    onClick={() => handleClickDetails(e.id)}
                    className="btn-list mx-3"
                    type="button"
                  >
                    <img src="/assets/eye/eye.png" alt="logo eye" />
                  </button>
                  {e.id}
                </td>
                <td className="flex-1 min-w-[80px]">
                  {e.workshopDate.split("-").reverse().join("-")}
                </td>
                <td className="flex-1 min-w-[120px]">{e.personNb}</td>
                <td className="flex-1 font-bold min-w-[70px]">
                  {e.active ? (
                    <button
                      type="button"
                      className="text-[green] active-transparent-button"
                      onClick={() => handleActive(e)}
                    >
                      actif
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="transparent-button"
                      onClick={() => handleActive(e)}
                    >
                      -
                    </button>
                  )}
                </td>
                <td className="flex-0 min-w-[90px] flew-row">
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
      {selectedDetailedWorkshop.length > 0 && (
        <WorkshopDetailsLayout
          selectedDetailedWorkshop={selectedDetailedWorkshop}
          hiddenDetails={hiddenDetails}
          setHiddenDetails={setHiddenDetails}
        />
      )}
      <AtelierLayout
        hidden={hidden}
        setHidden={setHidden}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </>
  );
}
