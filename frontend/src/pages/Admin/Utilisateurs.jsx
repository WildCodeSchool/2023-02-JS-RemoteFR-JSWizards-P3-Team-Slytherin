import { useState } from "react";
import fakedata from "../../components/Data/data-utilisateur-admin";
import UserLayout from "../../components/admin/UserLayout";

export default function Users() {
  const [hidden, setHidden] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(0);
  const [userData, setUserData] = useState(fakedata);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

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

  const handleDelete = (id) => {
    const newUsers = userData.filter((user) => user.id !== id);
    setUserData(newUsers);
  };

  const handleStatusChange = (id, value) => {
    const newUsers = userData.map((user) => {
      if (user.id === id) {
        return { ...user, adminStatus: value };
      }
      return user;
    });
    setUserData(newUsers);
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setHidden(!hidden);
  };

  return (
    <>
      <h1 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer les utilisateur
      </h1>
      <div className="flex flex-col items-center gap-6">
        <table className="w-full min-w-[580px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-1">
              <th className="flex-0" onClick={() => sortTable("id")}>
                Id{" "}
                {sortConfig.key === "id" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("lastname")}>
                Nom{" "}
                {sortConfig.key === "lastname" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("firstname")}>
                Prénom{" "}
                {sortConfig.key === "firstname" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("email")}>
                Email{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1">Statut</th>
              <th className="flex-0">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 shadow-inner"
                key={e.id}
              >
                <td className="flex-0">
                  <button type="button" onClick={() => handleRowClick(e)}>
                    {e.id}
                  </button>
                </td>
                <td className="flex-1">
                  <button type="button" onClick={() => handleRowClick(e)}>
                    {e.lastname}
                  </button>
                </td>
                <td className="flex-1">
                  <button type="button" onClick={() => handleRowClick(e)}>
                    {e.firstname}
                  </button>
                </td>
                <td className="flex-1">
                  <button type="button" onClick={() => handleRowClick(e)}>
                    {e.email}
                  </button>
                </td>
                <td className="flex-1">
                  <select
                    value={e.adminStatus}
                    onChange={(event) =>
                      handleStatusChange(e.id, event.target.value)
                    }
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
                <td className="flex-0 w-[70px]">
                  <button
                    type="button"
                    onClick={() => handleDelete(e.id)}
                    className="transparent-button max-w-fit"
                  >
                    <img
                      src="../../../public/assets/delete/delete.png"
                      alt="supprimer utilisateur"
                      className="w-4"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UserLayout
        selectedRowData={selectedRowData}
        hidden={hidden}
        setHidden={setHidden}
      />
    </>
  );
}
