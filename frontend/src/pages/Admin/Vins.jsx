import { useState } from "react";
import fakedata from "../../components/Data/data-wine";

export default function Vins() {
  const [vinData, setVinData] = useState(fakedata);
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

  console.info(selectedRowData);

  return (
    <>
      <h1 className="mt-16 mb-6 text-2xl font-bold">Gérer les vins</h1>
      <div className="flex flex-col items-center gap-6">
        <button type="button">Ajouter un vin</button>
        <table className="w-full min-w-[480px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3">
              <th className="flex-1">Image</th>
              <th className="flex-1" onClick={() => sortTable("name")}>
                Nom{" "}
                {sortConfig.key === "name" &&
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
                className="h-14 flex justify-center p-3 shadow-inner"
                key={e.id}
              >
                <td className="flex-1">
                  <img src={e.image} alt="miniature" className="h-11 rounded" />
                </td>
                <td className="flex-1">{e.name}</td>
                <td className="flex-1">{e.note}</td>
                <td className="flex-0 w-[70px]">
                  <button
                    type="button"
                    className="inherit"
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
