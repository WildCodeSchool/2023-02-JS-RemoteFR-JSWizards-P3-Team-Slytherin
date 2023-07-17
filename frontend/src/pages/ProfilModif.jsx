import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

function ProfilModif() {
  const { loggedInUser, handleUpdate } = useUser();

  const { id } = useParams();
  const APIMODIF = `${import.meta.env.VITE_BACKEND_URL}/users/${id}`;
  const APIPWD = `${import.meta.env.VITE_BACKEND_URL}/users/password/${id}`;
  const navigate = useNavigate();

  const [user, setUser] = useState({ ...loggedInUser, password: "" });

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const formatDate = (date) => {
    // transforme la date en JS
    const dateJS = new Date(date);

    // Je récupère l'année-mois-jour
    const year = dateJS.getFullYear();
    const month = String(dateJS.getMonth() + 1).padStart(2, "0");
    const day = String(dateJS.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleChangeModif = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitModif = (e) => {
    e.preventDefault();
    axios
      .put(APIMODIF, { ...user }, { withCredentials: true })
      .then((res) => {
        // une fois que l'update est bon, je mets à jour mon context
        handleUpdate({ ...res.data.user });
        navigate("/profil");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  const handleChangePwd = (e) => {
    if (e.target.name === "password") {
      setPwd(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPwd(e.target.value);
    }
  };

  const handleSubmitPwd = (e) => {
    e.preventDefault();
    if (pwd === confirmPwd) {
      axios
        .put(APIPWD, { password: pwd }, { withCredentials: true })
        .then((res) => {
          navigate("/profil");
        })
        .catch((err) => console.error(err.response.data.message));
    }
  };

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
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={user.firstname}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="lastname">Nom :</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={user.lastname}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="email">Adresse mail :</label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={user.email}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="birthday">Date de naissance :</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangeModif}
              defaultValue={formatDate(user.birthday)}
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
        <form className=" flex flex-col gap-6" onSubmit={handleSubmitPwd}>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangePwd}
            />
          </div>
          <div className="flex justify-between flex-row gap-5">
            <label htmlFor="password">Confirmer mot de passe :</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="text-primary w-44 p-1 rounded text-center"
              onChange={handleChangePwd}
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
