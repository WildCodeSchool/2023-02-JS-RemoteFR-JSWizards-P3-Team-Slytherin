import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout";

function Lexique() {
  const lexiqueDB = [
    {
      id: 1,
      title: "Aligoté blanc",
      description:
        "Originaire de Bourgogne. Il a été introduit dans les années 1950 dans le Bugey. Il est surtout présent en petite quantité autour de Belley dans le Cerdon. Il rentre dans la composition du Bugey blanc et mousseux. On retrouve des traces du cépage aligoté qui peut rentrer dans la composition du vin blanc AOVDQS Moselle. ",
      link: "http://www.vin-vigne.com/cepage/aligote-blanc.html#vin-cepage-Aligot%C3%A9%20blanc",
      color: "blanc",
    },
    {
      id: 2,
      title: "Chardonnay blanc",
      description:
        "Le Chardonnay appelé aussi aubaine ou beuanois : fut un temps où l'on croyait qu’il faisait partie de la famille du pinot on l'appelait alors pinot chardonnay. Ce cépage qui donne les plus grands blancs de Bourgogne. C’est un cépage qui débourre tôt et qui craint les gelées tardives. Il possède une très bonne faculté d'adaptation divers sols et conditions climatiques. Sur les sols crayeux de la Côte-d'Or du chablis et du mâconnais, les vins qu’il donne, dépendent des spécificités des conditions locales. ",
      link: "http://www.vin-vigne.com/cepage/chardonnay-blanc.html",
      color: "blanc",
    },
    {
      id: 3,
      title: "Pinot noir",
      description:
        "Cépage originaire de Bourgogne il peut aussi être appelé noiren ou noirien, il s'adapte très bien au sol varié de la grande Côte pour donner les raisins nécessaires à l'élaboration des plus grands de ce vignoble. Il a été sélectionné au cours des siècles ce qui fait probablement de lui un cépage autochtone. Il s'adapte très bien aux climats bourguignons. ",
      link: "http://www.vin-vigne.com/cepage/pinot-noir.html",
      color: "rouge",
    },
  ];
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [search, setSearch] = useState("");
  const [lexiqueDBFilter, setLexiqueDBFilter] = useState(lexiqueDB);
  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    setSearch(event.target.value);
    const words = event.target.value.toLowerCase();
    setLexiqueDBFilter(
      lexiqueDB.filter(
        (e) =>
          e.title.toLowerCase().includes(words) ||
          e.description.toLowerCase().includes(words) ||
          e.color.toLowerCase().includes(words)
      )
    );
    if (event.target.value === "") {
      setLexiqueDBFilter(lexiqueDB);
    }
  };
  const handleClick = () => {
    setSearch("");
    setLexiqueDBFilter(lexiqueDB);
  };
  return (
    <Layout>
      <div className="text-secondary pt-4">
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between px-4">
          <p className="italic px-0 text-xs md:text-sm md:px-0">
            Source :{" "}
            <a
              href="http://www.vin-vigne.com"
              title="Vin Vigne: Guide des vins et des vignes de France"
            >
              Vin-Vigne.com
            </a>
            {", "}
            <a
              href="http://www.vin-vigne.com/cepage/"
              title="Liste des cépages"
            >
              Liste des cépages
            </a>
          </p>
          <button type="button" onClick={goBack} className="text-center">
            Retour
          </button>
          <div className="flex flex-row items-center max-w-full">
            <p>🔎</p>
            <form className="p-1" onSubmit={handleSubmit}>
              <input
                className="text-primary pl-1 rounded-md"
                type="Search"
                placeholder="search"
                value={search}
                onChange={handleChange}
              />
            </form>
            <button
              className="p-1 pb-2 flex justify-center text-xl font-bold items-center bg-secondary rounded-full w-6 h-6 text-primary"
              type="button"
              onClick={handleClick}
            >
              &times;
            </button>
          </div>
        </div>
        <div className="flex flex-col 10/12 mx-12 xl:mx-20">
          <p className="text-3xl text-center pt-4">Lexique</p>
          {lexiqueDBFilter.map((e) => (
            <p key={e.id} className="pt-4">
              <span className="text-tertiary">
                {e.title} ({e.color}) :{" "}
              </span>
              {e.description}
              <a
                href={e.link}
                rel="noreferrer"
                target="_blank"
                className="font-bold italic"
              >
                [en savoir plus...]
              </a>
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Lexique;