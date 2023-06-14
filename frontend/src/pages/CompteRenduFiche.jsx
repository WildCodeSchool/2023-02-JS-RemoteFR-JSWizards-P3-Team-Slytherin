import Layout from "@components/Layout";

function CompteRenduFiche() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <Layout>
      <div>
        <h2>Fiche dégustation</h2>
        <h2>{`${day}/${month}/${year}`}</h2>
      </div>
      <div>
        <h3>Nom</h3>
        <h3>Maison</h3>
        <h3>Millésime</h3>
        <h3>Desc</h3>
      </div>
    </Layout>
  );
}

export default CompteRenduFiche;
