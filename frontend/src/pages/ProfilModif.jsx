import ModifProfil from "@components/ModifProfil";
import Layout from "../components/Layout";
import clients from "../components/Data/data-client";

function ProfilModif() {
  return (
    <Layout>
      <ModifProfil
        name={clients[0].name}
        lastname={clients[0].lastname}
        email={clients[0].email}
        birthday={clients[0].birthday}
      />
    </Layout>
  );
}

export default ProfilModif;
