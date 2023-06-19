export default function NotreSelection() {
  return (
    <>
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
          <img
            className="object-cover w-[104px] h-[144px]"
            src="../assets/images/whitewine1.jpg"
            alt="vin numéro 1"
          />
          <h3 className="text-center text-xs">Palacio de Meladi</h3>
        </div>
        <div>
          <img
            className="object-cover w-[104px] h-[144px]"
            src="../assets/images/whitewine2.jpg"
            alt="vin numéro 2"
          />
          <h3 className="text-center text-xs">Sauvignon blanc</h3>
        </div>
        <div>
          <img
            className="object-cover w-[104px] h-[144px]"
            src="../assets/images/whitewine3.jpg"
            alt="vin numéro 3"
          />
          <h3 className="text-center text-xs">Pino gris</h3>
        </div>
        <div>
          <img
            className="object-cover w-[104px] h-[144px]"
            src="../assets/images/whitewine4.jpg"
            alt="vin numéro 4"
          />
          <h3 className="text-center text-xs">Château Margaux</h3>
        </div>
        <div>
          <img
            className="object-cover w-[104px] h-[144px]"
            src="../assets/images/whitewine5.jpg"
            alt="vin numéro 5"
          />
          <h3 className="text-center text-xs">Chardonnay</h3>
        </div>
      </div>
    </>
  );
}
