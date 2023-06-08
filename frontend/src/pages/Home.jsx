import { useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [connection, setConnection] = useState(false);
  const [register, setRegister] = useState(true);
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
  const showConnection = connection ? null : "hidden";
  const hideRegister = connection ? "hidden" : null;
  const showRegister = register ? null : "hidden";
  const hideConnection = register ? "hidden" : null;
  return (
    <Layout>
      <div className="flex flex-col items-center h-full justify-center gap-16">
        <div className="text-center leading-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          temporibus aliquam reprehenderit optio excepturi quas saepe quasi at
          quaerat impedit facilis placeat vel inventore in omnis ipsam sed
          ratione molestias a pariatur sunt, sapiente quae. Dolores aut
          voluptate suscipit, maiores sapiente esse odit nemo rem minima cum
          dolorum rerum animi nulla accusantium consequuntur, dolor doloremque
          fugit perferendis quasi. Vel magnam placeat aut molestiae explicabo,
          ullam recusandae blanditiis beatae provident nam molestias
          necessitatibus, fugit voluptatibus unde distinctio! Accusantium,
          nostrum! Tempore, ducimus?
        </div>
        <div className="flex flex-col gap-6 w-3/6">
          <span className="w-56 bg-secondary h-[1px] self-center" />
          <button
            type="button"
            onClick={toggleRegister}
            className="text-xl text-center register-button self-center active:text-tertiary cursor-pointer"
          >
            Inscription
          </button>
          <form
            className={`flex flex-col items-center ${hideRegister} ${showRegister} `}
          >
            <div>
              <label htmlFor="email">Adresse mail</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemple@gmail.com"
                className="text-primary w-80 p-1 rounded"
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
                className="text-primary w-80 p-1 rounded"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input
                type="password"
                name="password"
                className="text-primary w-80 p-1 rounded"
              />
              <br />
              <br />
              <label htmlFor="confirmpassword">Confirmer mot de passe</label>
              <br />
              <input
                type="password"
                name="confirmpassword"
                className="text-primary w-80 p-1 rounded"
              />
            </div>
            <br />
            <button type="submit" className="self-center mt-2">
              Valider
              <br />
              l'inscription
            </button>
            {/* <span className="w-56 bg-secondary h-[1px] self-center mt-6" /> */}
          </form>
          <span className="w-56 bg-secondary h-[1px] self-center" />
          <button
            type="button"
            onClick={toggleConnection}
            className="text-xl text-center login-button self-center active:text-tertiary cursor-pointer"
          >
            Connection
          </button>
          <form
            className={`flex flex-col items-center ${showConnection} ${hideConnection}`}
          >
            <div>
              <label htmlFor="email">Adresse mail</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemple@gmail.com"
                className="text-primary w-80 p-1 rounded"
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">Mot de passe</label>
              <br />
              <input
                type="password"
                name="password"
                className="text-primary w-80 p-1 rounded"
              />
            </div>
            <br />
            <button type="submit" className="self-center mt-2">
              Se connecter
            </button>
          </form>
          <span className="w-56 bg-secondary h-[1px] self-center" />
        </div>
      </div>
    </Layout>
  );
}
