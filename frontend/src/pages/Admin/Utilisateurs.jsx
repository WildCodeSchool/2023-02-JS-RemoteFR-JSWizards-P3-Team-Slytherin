import { useState } from "react";
import fakedata from "../../components/Data/data-utilisateur-admin";

export default function Vins() {
  const [userData, setUserData] = useState(fakedata);
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
    const sortedData = [...userData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setUserData(sortedData);
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
      <h1 className="mt-16 mb-6 text-2xl font-bold">Gérer les utilisateur</h1>
      <div className="flex flex-col items-center gap-6">
        <table className="w-full min-w-[480px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3">
              <th className="flex-1">N°</th>
              <th className="flex-1" onClick={() => sortTable("lastName")}>
                Nom{" "}
                {sortConfig.key === "lastName" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("firstName")}>
                Prénom{" "}
                {sortConfig.key === "firstName" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("email")}>
                Email{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("admin")}>
                Statut{" "}
                {sortConfig.key === "admin" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0">Modifier</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 shadow-inner"
                key={e.id}
              >
                <td className="flex-1">{e.id}</td>
                <td className="flex-1">{e.lastName}</td>
                <td className="flex-1">{e.firstName}</td>
                <td className="flex-1">{e.email}</td>
                <td className="flex-1">{e.admin}</td>
                <td className="flex-0 w-[70px]">
                  <button
                    type="button"
                    className="editbtn"
                    onClick={() => handleRowClick(e)}
                  >
                    <img
                      src="/assets/delete/delete.png"
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
