const note = [
  [
    "/assets/stars/full_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
  ],
  [
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
  ],
  [
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/empty_star.png",
    "/assets/stars/empty_star.png",
  ],
  [
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/empty_star.png",
  ],
  [
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
    "/assets/stars/full_star.png",
  ],
];

export default function Avis() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 pt-4">
      <h2 className="text-3xl">Votre avis nous intéresse</h2>
      <form className="w-full flex flex-col gap-4 pt-4">
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[50%] md:max-w-[480px] md:text-lg">
              Comment avez-vous trouvé le choix des différents cépages ?
            </p>
            <div className="flex">
              {note[4].map((star, index) => (
                <img
                  className="w-6 h-6"
                  key={Math.random()}
                  src={star}
                  alt={`Etoile ${index + 1}`}
                />
              ))}
            </div>
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[50%] md:max-w-[480px] md:text-lg">
              Comment avez-vous trouvé l'ergonomie de l'application ?
            </p>
            <div className="flex">
              {note[2].map((star, index) => (
                <img
                  className="w-6 h-6"
                  key={Math.random()}
                  src={star}
                  alt={`Etoile ${index + 1}`}
                />
              ))}
            </div>
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[50%] md:max-w-[480px] md:text-lg">
              Comment avez-vous trouvé l'animation ?
            </p>
            <div className="flex">
              {note[3].map((star, index) => (
                <img
                  className="w-6 h-6"
                  key={Math.random()}
                  src={star}
                  alt={`Etoile ${index + 1}`}
                />
              ))}
            </div>
          </li>
        </ul>
        <span className="w-full bg-secondary h-[1px] self-center my-2" />
        <label className="text-sm md:text-lg" htmlFor="commentaire">
          Avez-vous un commentaire ou des suggestions à nous laisser ?
        </label>
        <textarea
          className="p-2"
          name="commentaire"
          id="commentaire"
          placeholder="J'ai trouvé cet atelier génial, par contre si j'avais une suggestion ce serait de..."
          cols="30"
          rows="5"
        />
        <div className="w-full flex justify-center pt-4">
          <button type="button">Envoyer votre avis</button>
        </div>
      </form>
    </div>
  );
}
