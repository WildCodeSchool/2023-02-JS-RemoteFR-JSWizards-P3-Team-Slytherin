import { useState } from "react";

export default function Home() {
  const [register, setRegister] = useState("");
  const [connection, setConnection] = useState("");
  const newDate = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  const formattedDate = newDate.toISOString().split("T")[0];

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
    <div className="flex flex-col items-center h-full gap-16 mt-8">
      <div className="text-center leading-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        temporibus aliquam reprehenderit optio excepturi quas saepe quasi at
        quaerat impedit facilis placeat vel inventore in omnis ipsam sed ratione
        molestias a pariatur sunt, sapiente quae. Dolores aut voluptate
        suscipit, maiores sapiente esse odit nemo rem minima cum dolorum rerum
        animi nulla accusantium consequuntur, dolor doloremque fugit perferendis
        quasi. Vel magnam placeat aut molestiae explicabo, ullam recusandae
        blanditiis beatae provident nam molestias necessitatibus, fugit
        voluptatibus unde distinctio! Accusantium, nostrum! Tempore, ducimus?
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
        <form className={`flex flex-col items-center ${showRegister}`}>
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
            />
          </div>
          <br />
          <div>
            <label htmlFor="birthdate">Date de naissance (facultatif)</label>
            <br />
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              min="1900-01-01"
              max={formattedDate}
              className="text-primary w-72 p-1 rounded"
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
        <form className={`flex flex-col items-center ${showConnection}`}>
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
