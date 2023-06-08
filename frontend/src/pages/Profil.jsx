import ClientInfoProfil from "@components/Profil/ClientInfoProfil";
import FicheDegustation from "@components/Profil/FicheDegustation";
import Layout from "@components/Layout";

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

const fiches = [
  {
    id: 1,
    src: "/assets/wine/whitewine1.jpg",
    title: "Palacio de Menadi",
  },
  {
    id: 2,
    src: "/assets/wine/whitewine2.jpg",
    title: "Marlborough - Sauvignon blanc",
  },
  {
    id: 3,
    src: "/assets/wine/whitewine3.jpg",
    title: "Cambalala - Pinot Grigio",
  },
  {
    id: 4,
    src: "/assets/wine/whitewine4.jpg",
    title: "Wente - Chardonnay",
  },
  {
    id: 5,
    src: "/assets/wine/whitewine5.jpg",
    title: "Alta Italia - Pinot Grigio",
  },
];

function Profil() {
  return (
    <Layout>
      <div className="text-secondary p-[1.5rem] h-[full] sm:px-[3.2rem] md:px-[6.4rem] min-[950px]:px-[7.5rem]">
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
            <button type="button">À modifier</button>
          </div>
          <div className="lg:flex flex-col lg:w-[50%]">
            <div className="profilTitle">
              <h3 className="pt-[1.75rem] text-2xl pb-[0.5rem]">
                Mes fiches dégustation
              </h3>
            </div>
            <div className="pt-[1.5rem]">
              {fiches.map((fiche) => (
                <FicheDegustation
                  key={fiche.id}
                  src={fiche.src}
                  title={fiche.title}
                />
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 py-[1.8rem]">
              <button type="button">Voir plus</button>
              <button type="button">Mon profil dégustation</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profil;
