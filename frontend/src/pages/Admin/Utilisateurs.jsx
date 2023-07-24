import { useState, useEffect } from "react";
import axios from "axios";
import UserLayout from "../../components/admin/UserLayout";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const [userDataFilter, setUserDataFilter] = useState([]);
  const [hidden, setHidden] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedRowData, setSelectedRowData] = useState(0);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [refresh, setRefresh] = useState(false);

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

  const handleDelete = async (id) => {
    await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`);
    setRefresh(!refresh);
  };

  const handleStatusChange = async (id, value) => {
    if (id !== 1) {
      await axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/users/admin/${id}`, {
          adminStatus: value,
        })
        .catch((err) => console.error(err));
    }
    setRefresh(!refresh);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`)
      .then((res) => {
        setUserData(res.data.sort((a, b) => b.id - a.id));
        setUserDataFilter(res.data.sort((a, b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  }, [refresh]);

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setHidden(!hidden);
  };
  //
  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    setSearch(event.target.value);
    const research = event.target.value.toLowerCase();
    setUserDataFilter(
      userData.filter(
        (e) =>
          e.firstname.toLowerCase().includes(research) ||
          e.lastname.toLowerCase().includes(research) ||
          e.email.toLowerCase().includes(research)
      )
    );
    if (event.target.value === "") {
      setUserDataFilter(userData);
    }
  };
  const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
  const handleClick = () => {
    setSearch("");
    setUserDataFilter(userData);
  };

  return (
    <>
      <h2 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer les utilisateurs
      </h2>
      <div className="flex flex-row justify-center mb-6 items-center max-w-full">
        <p>🔎</p>
        <form className="p-1" onSubmit={handleSubmit}>
          <input
            className="text-primary pl-1 rounded-md"
            type="search"
            placeholder="search"
            value={search}
            onChange={handleChange}
          />
        </form>
        {isFirefox && (
          <button
            className="flex justify-center text-xl font-bold items-center bg-secondary rounded-full text-primary lexique-button"
            type="button"
            onClick={handleClick}
          >
            <span className="lexique-button-content">&times;</span>
          </button>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <table className="w-full min-w-[580px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-2">
              <th
                className="flex-1 min-w-[150px]"
                onClick={() => sortTable("lastname")}
              >
                Nom{" "}
                {sortConfig.key === "lastname" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[150px]"
                onClick={() => sortTable("firstname")}
              >
                Prénom{" "}
                {sortConfig.key === "firstname" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[200px]"
                onClick={() => sortTable("email")}
              >
                Email{" "}
                {sortConfig.key === "email" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0">Recettes</th>
              <th
                className="flex-1 min-w-[80px]"
                onClick={() => sortTable("adminStatus")}
              >
                Statut{" "}
                {sortConfig.key === "adminStatus" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0 w-[30px]"> </th>
            </tr>
          </thead>
          <tbody>
            {userDataFilter.map((e) => (
              <tr
                className="h-14 flex justify-center p-2 shadow-inner"
                key={e.id}
              >
                <td className="flex-1 min-w-[150px]">{e.lastname}</td>
                <td className="flex-1 min-w-[150px]">{e.firstname}</td>
                <td className="flex-1 min-w-[200px]">{e.email}</td>
                <td className="flex-0">
                  <button
                    type="button"
                    onClick={() => handleRowClick(e.id)}
                    className="transparent-button max-w-fit"
                  >
                    <img
                      src="/assets/eye/eye.png"
                      alt="supprimer utilisateur"
                      className="w-6"
                    />
                  </button>
                </td>
                <td className="flex-1 min-w-[80px]">
                  <select
                    name="adminStatus"
                    className="rounded"
                    onChange={(event) =>
                      handleStatusChange(e.id, event.target.value)
                    }
                  >
                    {e.adminStatus === 1 ? (
                      <>
                        <option selected value={1}>
                          Admin
                        </option>
                        <option value={0}>User</option>
                      </>
                    ) : (
                      <>
                        <option value={1}>Admin</option>
                        <option selected value={0}>
                          User
                        </option>
                      </>
                    )}
                  </select>
                </td>
                <td className="flex-0 w-[30px]">
                  <button
                    type="button"
                    onClick={() => handleDelete(e.id)}
                    className="transparent-button max-w-fit"
                  >
                    <img
                      src="/assets/delete/delete.png"
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
