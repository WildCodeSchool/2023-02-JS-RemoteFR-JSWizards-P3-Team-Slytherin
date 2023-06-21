import Stars from "@components/Stars";

export default function Avis() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 pt-4">
      <h2 className="text-3xl">Votre avis nous intéresse</h2>
      <form className="w-full flex flex-col gap-4 pt-4">
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              Comment avez-vous trouvé le choix des différents cépages ?
            </p>
            <Stars name="choixDesCepages" />
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              Comment avez-vous trouvé l'ergonomie de l'application ?
            </p>
            <Stars name="ergonomie" />
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              Comment avez-vous trouvé l'animation ?
            </p>
            <Stars name="animation" />
          </li>
        </ul>
        <span className="w-full bg-secondary h-[1px] self-center my-2" />
        <label className="text-sm md:text-lg" htmlFor="commentaire">
          Avez-vous un commentaire ou des suggestions à nous laisser ?
        </label>
        <textarea
          className="p-2 text-primary"
          name="commentaire"
          id="commentaire"
          placeholder="J'ai trouvé cet atelier génial, par contre si j'avais une suggestion ce serait de..."
          cols="30"
          rows="5"
        />
        <div className="w-full flex justify-center pt-4 mb-4">
          <button type="button">Envoyer votre avis</button>
        </div>
      </form>
    </div>
  );
}
