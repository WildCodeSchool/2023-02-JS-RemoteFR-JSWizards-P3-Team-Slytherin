import Layout from "../components/Layout";

export default function NotreSelection() {
  return (
    <Layout>
      <h2 className="text-center font-bold text-2xl pt-3 text-secondary">
        Notre sélection de vins
      </h2>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-tertiary text-primary m-7 font-bold p-[0.5rem] rounded-full text-xs text-center"
        >
          Afficher tous les vins
        </button>
      </div>
      <div className="flex sm:mx-10 gap-14 flex-wrap justify-center md:mx-24 md:gap-24 lg:mx-48 lg:gap-24">
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
}
