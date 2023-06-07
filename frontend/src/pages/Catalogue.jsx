import Layout from "../components/Layout";

const Catalogue = () => {
  return (
    <Layout>
      <h2 className="text-center font-bold text-2xl pt-[2rem] text-secondary">
        Catalogue des vins
      </h2>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-tertiary text-primary m-[2rem] font-bold p-[0.5rem] rounded-full text-xs text-center"
        >
          Afficher tous les vins
        </button>
      </div>
      <div className="flex gap-10 flex-wrap justify-around">
        <div>
          <img src="../assets/images/vin1.svg" alt="vin numéro 1" />
          <h3 className="text-center text-xs">Palacio de Meladi</h3>
        </div>
        <div>
          <img src="../assets/images/vin2.svg" alt="vin numéro 2" />
          <h3 className="text-center text-xs">Sauvignon blanc</h3>
        </div>
        <div>
          <img src="../assets/images/vin3.svg" alt="vin numéro 3" />
          <h3 className="text-center text-xs">Pino gris</h3>
        </div>
        <div>
          <img src="../assets/images/vin4.svg" alt="vin numéro 4" />
          <h3 className="text-center text-xs">Château Margaux</h3>
        </div>
        <div>
          <img src="../assets/images/vin5.svg" alt="vin numéro 5" />
          <h3 className="text-center text-xs">Chardonnay</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Catalogue;
