import { useState } from "react";
import data from "../../components/Data/data-utilisateur-admin";

export default function Utilisateurs() {
  const [users, setUsers] = useState(data);

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="flex flex-col justify-center mt-8">
      <h1 className="flex justify-center mb-8 text-2xl font-bold">
        Utilisateurs
      </h1>
      <table className="border-collapse border border-black">
        <tr className="">
          <th className="border border-black">N°</th>
          <th className="border border-black">Nom</th>
          <th className="border border-black">Prénom</th>
          <th className="border border-black">Email</th>
          <th className="border border-black">Supprimer</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id} className="text-center">
            <td className="border border-black">{user.id}</td>
            <td className="border border-black">{user.lastName}</td>
            <td className="border border-black">{user.firstName}</td>
            <td className="border border-black">{user.email}</td>
            <td className="border border-black">
              <button
                type="button"
                onClick={() => handleDelete(user.id)}
                className="mx-auto transparent-button"
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
      </table>
    </div>
  );
}
