import Layout from "../components/Layout";
import data from "../components/Data/data-wine";
import Historique from "../components/Historique";

function HistoriqueFiches() {
  return (
    <Layout>
      <Historique wines={data} />
    </Layout>
  );
}

export default HistoriqueFiches;
