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
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl">Votre avis nous intéresse</h2>
        <ul className="flex flex-col w-[60%]">
          <li className="flex justify-between">
            <p>Critère 1</p>
            <div className="flex">
              {note[4].map((star, index) => (
                <img
                  key={star[index]}
                  width="24px"
                  src={star}
                  alt={`Etoile ${star}`}
                />
              ))}
            </div>
          </li>
          <li className="flex justify-between">
            <p>Critère 2</p>
            <div className="flex">
              {note[2].map((star, index) => (
                <img
                  key={star[index]}
                  width="24px"
                  src={star}
                  alt={`Etoile ${star}`}
                />
              ))}
            </div>
          </li>
          <li className="flex justify-between">
            <p>Critère 3</p>
            <div className="flex">
              {note[3].map((star, index) => (
                <img
                  key={star[index]}
                  width="24px"
                  src={star}
                  alt={`Etoile ${star}`}
                />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
