import Layout from "../components/Layout";
import ResumeDegustation from "../components/ResumeDegustation";
import data from "../components/Data/data-wine";

export default function ProfilDegustation() {
  return (
    <Layout>
      <ResumeDegustation wines={data} />
    </Layout>
  );
}
