import { useEffect, useState } from "react";
import axios from "axios";
import VinLayout from "@components/admin/VinLayout";

export default function Vins() {
  const [vinData, setVinData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    wineName: "",
    castle: "",
    grapeVariety: "",
    wineYear: "",
    wineDescription: "",
    wineType: "",
    wineImage: "",
  });
  const [refresh, setRefresh] = useState(false);
  const [hidden, setHidden] = useState(false);

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...vinData].sort((a, b) => {
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
    setVinData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setHidden(!hidden);
  };

  const deleteWine = (id) => {
    setHidden(!hidden);
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/wines/${id}`);
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/wines`).then((res) => {
      setVinData(res.data);
    });
  }, [refresh]);

  return (
    <>
      <h1 className="mt-16 mb-6 text-2xl font-bold">Gérer les vins</h1>
      <div className="flex flex-col gap-6">
        <button type="button" className="self-center">
          Ajouter un vin
        </button>
        <table className="w-full min-w-[480px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3 px-10">
              <th className="flex-0 w-16">Image</th>
              <th
                className="flex-1 min-w-[280px]"
                onClick={() => sortTable("wineName")}
              >
                Nom{" "}
                {sortConfig.key === "wineName" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[300px] max-[1100px]:hidden"
                onClick={() => sortTable("castle")}
              >
                Domaine{" "}
                {sortConfig.key === "castle" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("wineType")}>
                Couleur{" "}
                {sortConfig.key === "wineType" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0">Modifier</th>
            </tr>
          </thead>
          <tbody>
            {vinData.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 px-10 shadow-inner"
                key={e.id}
              >
                <td className="flex-0 w-16">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                      e.wineImage
                    }`}
                    alt="miniature"
                    className="h-11 rounded"
                  />
                </td>
                <td className="flex-1 min-w-[280px]">{e.wineName}</td>
                <td className="flex-1 min-w-[300px] max-[1100px]:hidden">
                  {e.castle}
                </td>
                <td className="flex-1">{e.wineType}</td>
                <td className="flex-0 w-[70px]">
                  <button
                    type="button"
                    className="editbtn"
                    onClick={() => handleRowClick(e)}
                  >
                    <img
                      src="/assets/editpen/editpen.png"
                      alt="modify"
                      className="h-5 cursor-pointer"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <VinLayout
        selectedRowData={selectedRowData}
        hidden={hidden}
        setHidden={setHidden}
        deleteWine={deleteWine}
      />
    </>
  );
}
