import Layout from "@components/Layout";

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
    <Layout>
      <div className="w-full flex flex-col items-center justify-center gap-4 pt-4">
        <h2 className="text-3xl">Votre avis nous intéresse</h2>
        <form className="w-full flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center">
              <p className="text-large">
                Comment avez-vous trouvé le choix des différents cépages ?
              </p>
              <div className="flex">
                {note[4].map((star, index) => (
                  <img
                    className="w-6 h-6"
                    key={star[index]}
                    src={star}
                    alt={`Etoile ${star}`}
                  />
                ))}
              </div>
            </li>
            <li className="flex justify-between">
              <p className="text-large">
                Comment avez-vous trouvé l'ergonomie de l'application ?
              </p>
              <div className="flex">
                {note[2].map((star, index) => (
                  <img
                    className="w-6 h-6"
                    key={star[index]}
                    src={star}
                    alt={`Etoile ${star}`}
                  />
                ))}
              </div>
            </li>
            <li className="flex justify-between">
              <p className="text-large">
                Comment avez-vous trouvé l'animation ?
              </p>
              <div className="flex">
                {note[3].map((star, index) => (
                  <img
                    className="w-6 h-6"
                    key={star[index]}
                    src={star}
                    alt={`Etoile ${index + 1}`}
                  />
                ))}
              </div>
            </li>
          </ul>
          <label className="text-large" htmlFor="commentaire">
            Avez-vous un commentaire ou des suggestions à nous laisser ?
          </label>
          <textarea name="commentaire" id="commentaire" cols="30" rows="10" />
          <button type="submit">Envoyer votre avis</button>
        </form>
      </div>
    </Layout>
  );
}
