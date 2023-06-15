import Selection from "../components/Selection";
import Layout from "../components/Layout";
import data from "../components/Data/data-wine";

export default function NotreSelection() {
  return (
    <Layout>
      <Selection wines={data} />
    </Layout>
  );
}
