import { useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

export default function Home() {
  const [register, setRegister] = useState("");
  const [connection, setConnection] = useState("");
  const newDate = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  const formattedDate = newDate.toISOString().split("T")[0];
  const { handleSubmitLogIn, handleChange } = useUser();
  const APINSCRIPTION = `${import.meta.env.VITE_BACKEND_URL}/inscription`;

  const [user, setUser] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    birthday: "",
  });

  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const handleChangeInscription = (e) => {
    if (e.target.name === "password") {
      setPwd(e.target.value);
    } else if (e.target.name === "confirmpassword") {
      setConfirmPwd(e.target.value);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitInscription = (e) => {
    e.preventDefault();
    const birthday = user.birthday || null;
    if (pwd === confirmPwd) {
      const newUser = { ...user, password: pwd, birthday };

      axios
        .post(APINSCRIPTION, newUser, { withCredentials: true })
        .then((res) => {
          console.warn(res.data.message);
          window.location.href = "/";
        })
        .catch((err) => console.error(err.response.data.message));
    }
  };

  const toggleConnection = () => {
    setConnection(true);
    setRegister(false);
  };
  const toggleRegister = () => {
    setRegister(true);
    setConnection(false);
  };
  let showRegister = "";
  let showConnection = "h-0 overflow-hidden";
  if (register === false) {
    showRegister = "slide-in";
  } else if (register === true) {
    showRegister = "slide-out";
  }
  if (connection === true) {
    showConnection = "slide-out";
  } else if (connection === false) {
    showConnection = "slide-in";
  }

  return (
    <div className="flex flex-col items-center h-full gap-10 mt-14">
      <div className="text-center leading-6 w-[80%] ">
        Notre atelier de dégustation de vins est un événement où les
        participants peuvent déguster différents vins tout en apprenant sur leur
        origine, leur production et leur goût. Les participants peuvent
        apprendre à identifier les différents arômes et saveurs des vins, ainsi
        qu’à comprendre les différences entre les différents types de vins. Les
        ateliers de dégustation de vins sont une excellente occasion d’apprendre
        sur le vin tout en passant un bon moment entre amis ou en famille.
      </div>
      <div className="flex flex-col gap-6">
        <span className="w-56 bg-secondary h-[1px] self-center" />
        <button
          type="button"
          onClick={toggleRegister}
          className="text-xl text-center register-button self-center active:text-tertiary cursor-pointer translate-y-2"
        >
          Inscription
        </button>
        <form
          className={`flex flex-col items-center ${showRegister}`}
          onSubmit={handleSubmitInscription}
        >
          <div>
            <label htmlFor="email">Adresse mail</label>
            <br />
            <input
              type="email"
              name="email"
              id="email-register"
              placeholder="exemple@gmail.com"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastname">Nom</label>
            <br />
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
          </div>
          <br />
          <div>
            <label htmlFor="firstname">Prénom</label>
            <br />
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
          </div>
          <br />
          <div>
            <label htmlFor="birthdate">Date de naissance (facultatif)</label>
            <br />
            <input
              type="date"
              name="birthday"
              id="birthdate"
              min="1900-01-01"
              max={formattedDate}
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
            <br />
            <br />
            <label htmlFor="confirmpassword">Confirmer mot de passe</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChangeInscription}
            />
          </div>
          <br />
          <button type="submit" className="self-center mt-2">
            Valider
            <br />
            l'inscription
          </button>
        </form>
        <span className="w-56 bg-secondary h-[1px] self-center" />
        <button
          type="button"
          onClick={toggleConnection}
          className="text-xl text-center login-button self-center active:text-tertiary cursor-pointer translate-y-2"
        >
          Connexion
        </button>
        <form
          className={`flex flex-col items-center ${showConnection}`}
          onSubmit={handleSubmitLogIn}
        >
          <div>
            <label htmlFor="email">Adresse mail</label>
            <br />
            <input
              type="email"
              name="email"
              id="email-connection"
              placeholder="exemple@gmail.com"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              required
              className="text-primary w-72 p-1 rounded"
              onChange={handleChange}
            />
          </div>
          <br />
          <button type="submit" className="self-center mt-2">
            Se connecter
          </button>
        </form>
        <span className="w-56 bg-secondary h-[1px] self-center mb-8" />
      </div>
    </div>
  );
}
