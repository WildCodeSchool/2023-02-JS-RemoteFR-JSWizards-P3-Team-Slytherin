import { useState } from "react";
import data from "../../components/Data/data-utilisateur-admin";

export default function Utilisateurs() {
  const [users, setUsers] = useState(data);

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const handleAdminChange = (id, value) => {
    const newUsers = users.map((user) =>
      user.id === id ? { ...user, admin: value } : user
    );
    setUsers(newUsers);
  };

  return (
    <div className="flex flex-col justify-center mt-8 min-w-[425px]">
      <h1 className="flex justify-center mb-12 text-2xl font-bold">
        Gérer les utilisateurs
      </h1>
      <div className="flex justify-center">
        <div className="flex">
          <table className="border-collapse border border-black">
            <tr className="">
              <th className="border border-black p-2">N°</th>
              <th className="border border-black p-2">Nom</th>
              <th className="border border-black p-2">Prénom</th>
              <th className="border border-black">Email</th>
              <th className="border-r border-black p-2">Statut</th>{" "}
            </tr>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border border-black">{user.id}</td>
                <td className="border border-black">{user.lastName}</td>
                <td className="border border-black">{user.firstName}</td>
                <td className="border border-black p-2">{user.email}</td>
                <td className="border border-black">
                  {" "}
                  <select
                    value={user.admin ? "admin" : "user"}
                    onChange={(e) =>
                      handleAdminChange(user.id, e.target.value === "admin")
                    }
                    className="select-transparent"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </td>
              </tr>
            ))}
          </table>
          <div className="ml-4 mt-5 mb-2 pt-8 w-12 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center h-6">
                <button
                  type="button"
                  onClick={() => handleDelete(user.id)}
                  className="transparent-button max-w-fit"
                >
                  <img
                    src="../../../public/assets/delete/delete.png"
                    alt="supprimer utilisateur"
                    className="w-4"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
