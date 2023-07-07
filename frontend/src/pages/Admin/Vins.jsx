import { useEffect, useState } from "react";
import axios from "axios";

export default function Vins() {
  const [vinData, setVinData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [selectedRowData, setSelectedRowData] = useState(null);

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...vinData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setVinData(sortedData);
    setSortConfig({ key, direction });
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData({
      id: rowData.id,
      nom: rowData.name,
      image: rowData.image,
    });
  };

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/wines`).then((res) => {
      setVinData(res.data);
    });
  }, []);

  console.info(selectedRowData);

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
                onClick={() => sortTable("name")}
              >
                Nom{" "}
                {sortConfig.key === "name" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[300px] max-[1100px]:hidden"
                onClick={() => sortTable("domaine")}
              >
                Domaine{" "}
                {sortConfig.key === "domaine" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("note")}>
                Couleur{" "}
                {sortConfig.key === "note" &&
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
    </>
  );
}
