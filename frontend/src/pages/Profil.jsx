import ClientInfoProfil from "@components/ClientInfoProfil";

const clients = [
  {
    name: "Sébastien",
    lastname: "Birolleau",
    email: "sebastien@gmail.com",
    birthday: "08/03/1982",
    password: "...",
  },
  {
    name: "Youcef",
    lastname: "Aïssat",
    email: "youcef@gmail.com",
    birthday: "09/06/1982",
    password: "...",
  },
  {
    name: "Samuel",
    lastname: "Faber",
    email: "samuel@gmail.com",
    birthday: "01/01/1985",
    password: "...",
  },
  {
    name: "Oyhana",
    lastname: "Mahjoubi",
    email: "oyhana@gmail.com",
    birthday: "08/08/1989",
    password: "...",
  },
  {
    name: "Chloé",
    lastname: "Elle",
    email: "chloe@gmail.com",
    birthday: "06/02/1993",
    password: "...",
  },
  {
    name: "Vincent",
    lastname: "Daviaud",
    email: "vincent@gmail.com",
    birthday: "24/05/1996",
    password: "...",
  },
];

function Profil() {
  return (
    <div className="text-secondary p-[1.5rem] h-full">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl pb-[2rem]">Bonjour {clients[0].name}</h2>
        <button type="button">Mes recettes</button>
      </div>
      <div className="profilTitle">
        <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">Mes informations</h3>
      </div>
      <ClientInfoProfil
        email={clients[0].email}
        birthday={clients[0].birthday}
      />
      <button type="button">À modifier</button>
      <div className="profilTitle">
        <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
          Mes fiches dégustation
        </h3>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button type="button">Voir plus</button>
        <button type="button">Mon profil dégustation</button>
      </div>
    </div>
  );
}

export default Profil;
