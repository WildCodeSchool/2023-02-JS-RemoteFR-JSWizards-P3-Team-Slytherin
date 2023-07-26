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
      id: "",
      lastname: "",
      firstname: "",
      email: "",
      birthday: "",
      adminStatus: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/avisuser`)
      .then((res) => {
        setAvis(res.data.reverse());
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center text-xs">
      <div className="h-[90%] w-full overflow-auto flex flex-wrap justify-center">
        {avis.map(
          (e) =>
            (e.note1 || e.note2 || e.note3 || e.comment) && (
              <div
                key={`${e.id_user}${e.id_workshop}`}
                className="opinion-card"
              >
                <h2 className="text-center font-semibold">{e.lastname}</h2>
                <h3 className="text-center font-semibold">{e.firstname}</h3>
                <div className="flex justify-between">
                  <p className="opinion text-center">
                    Accueil{" "}
                    <span className="opinion font-bold text-tertiary">
                      {e.note1 === 0 ? "-" : e.note1}
                    </span>
                    /5
                  </p>
                  <p className="opinion text-center">
                    Appentissage{" "}
                    <span className="opinion font-bold text-tertiary">
                      {e.note2 === 0 ? "-" : e.note2}
                    </span>
                    /5
                  </p>
                  <p className="opinion text-center">
                    Recommande{" "}
                    <span className="opinion font-bold text-tertiary">
                      {e.note3 === 0 ? "-" : e.note3}
                    </span>
                    /5
                  </p>
                </div>
                {e.comment ? (
                  <p className="minfont leading-4">{e.comment}</p>
                ) : (
                  <p className="minfont leading-4 italic">
                    L'utilisateur n'a pas posté de commentaire..
                  </p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );
}
