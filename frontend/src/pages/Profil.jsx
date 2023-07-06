import { Link } from "react-router-dom";
import ClientInfoProfil from "@components/Profil/ClientInfoProfil";
import FicheDegustation from "@components/Profil/FicheDegustation";
import data from "@components/Data/data-wine";
import clients from "@components/Data/data-client";

function Profil() {
  return (
    <div>
      <div className="text-secondary p-[1.5rem] sm:px-[3.2rem] md:px-[6.4rem] min-[950px]:px-[7.5rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl pb-[2rem]">Bonjour {clients[0].name}</h2>
          <button type="button">Mes recettes</button>
        </div>
        <div className="lg:flex justify-between">
          <div className="lg:flex flex-col justify-center">
            <div className="profilTitle">
              <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
                Mes informations
              </h3>
            </div>
            <ClientInfoProfil
              email={clients[0].email}
              birthday={clients[0].birthday}
            />
            <Link to="/profil/modifier">
              <button type="button">À modifier</button>
            </Link>
          </div>
          <div className="lg:flex flex-col lg:w-[50%]">
            <div className="profilTitle">
              <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
                Mes fiches dégustation
              </h3>
            </div>
            <div className="pt-[1.5rem]">
              {data.map((fiche) => (
                <FicheDegustation
                  key={fiche.id}
                  src={fiche.image}
                  title={fiche.name}
                />
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 py-[1.8rem]">
              <Link to="/profil/historique_fiches">
                <button type="button">Voir plus</button>
              </Link>
              <Link to="/profil/profil_degustation">
                <button type="button">Mon profil dégustation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
