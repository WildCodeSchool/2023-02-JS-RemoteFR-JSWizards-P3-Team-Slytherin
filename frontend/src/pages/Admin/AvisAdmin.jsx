import axios from "axios";
import { useState, useEffect } from "react";

export default function AvisAdmin() {
  const [avis, setAvis] = useState([
    {
      id_workshop: "",
      id_user: "",
      note1: "",
      note2: "",
      note3: "",
      comment: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/avis`)
      .then((res) => {
        setAvis(res.data.recettes.userworkshop.reverse());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center text-xs">
      <div className="h-[90%] w-full overflow-auto flex flex-wrap justify-center">
        {avis.map((e) => (
          <div className="opinion-card">
            <h2 className="text-center font-semibold">{e.id_user} Nom</h2>
            <h3 className="text-center font-semibold">{e.id_user} Prenom</h3>
            <div className="flex justify-between">
              <p className="opinion text-center">
                Accueil{" "}
                <span className="opinion font-bold text-tertiary">
                  {e.note1}
                </span>
                /5
              </p>
              <p className="opinion text-center">
                Appentissage{" "}
                <span className="opinion font-bold text-tertiary">
                  {e.note2}
                </span>
                /5
              </p>
              <p className="opinion text-center">
                Recommande{" "}
                <span className="opinion font-bold text-tertiary">
                  {e.note3}
                </span>
                /5
              </p>
            </div>
            <p className="minfont leading-4">{e.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
