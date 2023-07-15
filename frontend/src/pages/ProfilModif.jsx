import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

function ProfilModif() {
  const { loggedInUser } = useUser();

  const { id } = useParams();
  const APIMODIF = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
  const navigate = useNavigate();

  const [user, setUser] = useState({ ...loggedInUser, password: "" });

  const handleChangeModif = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitModif = (e) => {
    e.preventDefault();
    // const updatedUser = { ...loggedInUser };

    // if (user.firstname && user.firstname.trim() !== "") {
    //   updatedUser.firstname = user.firstname;
    // }
    // if (user.lastname && user.lastname.trim() !== "") {
    //   updatedUser.lastname = user.lastname;
    // }
    // if (user.email && user.email.trim() !== "") {
    //   updatedUser.email = user.email;
    // }
    // if (user.birthday && user.birthday.trim() !== "") {
    //   updatedUser.birthday = user.birthday;
    // }

    // if (user.password && user.password.trim() !== "") {
    //   updatedUser.password = user.password;
    // }

    // const putData = Object.keys(user).reduce((acc, key) => {
    //   if (user[key]) {
    //     acc[key] = user[key];
    //   }
    //   return acc;
    // }, {});

    const putData = { ...user };
    if (user.birthday && user.birthday.trim() !== "") {
      putData.birthday = new Date(user.birthday);
    } else {
      delete putData.birthday;
    }
    // if (!putData.password)
    axios
      .put(APIMODIF, { ...user }, { withCredentials: true })
      .then((res) => {
        console.warn(res.data.message);
        navigate("/profil");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  // const handleSubmitModif = (e) => {
  //   e.preventDefault();
  //   if (user.birthday && user.birthday.trim() === "") {
  //     user.birthday = null;
  //   }
  //   axios
  //     .put(APIMODIF, { ...user }, { withCredentials: true })
  //     .then((res) => {
  //       console.warn(res.data.message);
  //       navigate("/profil");
  //     })
  //     .catch((err) => console.error(err.response.data.message));
  // };

  return (
    <div>
      <div className="flex flex-col items-center p-10">
        <h2 className="text-xl">Modifier mon profil</h2>
        <span className="w-56 bg-secondary h-[1px] self-center m-6" />

        <form className=" flex flex-col gap-6" onSubmit={handleSubmitModif}>
          <div className="flex flex-row justify-between gap-5">
            <label htmlFor="name">Prénom :</label>
            <input
              type="text"
              name="firstname"
              id="name"
              placeholder={loggedInUser.firstname}
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={loggedInUser.firstname}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="lastname">Nom :</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder={loggedInUser.lastname}
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={loggedInUser.lastname}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="email">Adresse mail :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={loggedInUser.email}
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={loggedInUser.email}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="birthday">Date de naissance :</label>
            <input
              type="text"
              name="birthday"
              id="birthday"
              placeholder={loggedInUser.birthday}
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={loggedInUser.birthday}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Confirmer mot de passe:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="text-primary w-44 p-1 rounded text-center"
              // onChange={handleChangeModif}
            />
          </div>
          <div className="p-8 flex flex-row justify-center flex-wrap">
            <button className="m-2" type="submit">
              Valider
            </button>
            <Link to="/profil">
              <button className="m-2" type="button">
                Annuler
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilModif;
