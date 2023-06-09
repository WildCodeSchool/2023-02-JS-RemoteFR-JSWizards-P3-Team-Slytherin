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
      link: "http://www.vin-vigne.com/cepage/aligote-blanc.html",
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
              rel="noreferrer"
              target="_blank"
            >
              Vin-Vigne.com
            </a>
            {", "}
            <a
              href="http://www.vin-vigne.com/cepage/"
              title="Liste des cépages"
              rel="noreferrer"
              target="_blank"
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              accusamus consectetur aperiam aut exercitationem magnam voluptates
              obcaecati facere similique aliquam laudantium fugiat iure
              repellendus rerum consequuntur nobis, at eveniet iste omnis
              adipisci officia modi nesciunt! Dolorum unde ad aperiam, molestias
              neque cum officia non at iste a exercitationem iure pariatur
              nostrum dicta quam facilis perspiciatis itaque nihil quod quia
              nisi qui reprehenderit deserunt. Assumenda, quae? Aspernatur ea
              assumenda soluta rem voluptatem error, quia rerum placeat, eum id
              reprehenderit iste, voluptas nihil ad perferendis totam? Voluptas
              nemo est tenetur voluptatum eos fugiat neque consequuntur, iste
              repudiandae debitis in quia temporibus id obcaecati tempore iure
              eaque, quasi iusto, nam rerum error totam. Quod aliquam, nisi
              cupiditate quasi quaerat, nostrum quis ipsum nam quibusdam
              voluptatibus ab architecto vel adipisci repellat inventore!
              Laborum exercitationem cumque nam quisquam necessitatibus
              laboriosam ducimus. Quidem, veniam asperiores iusto consequuntur,
              nisi ea, enim quam vitae eligendi inventore odit maiores? Quo,
              tempore. Cum adipisci ut consequatur corrupti modi veniam harum
              dolores, placeat pariatur neque quae at repellendus veritatis
              quidem illo facere ab magni nihil reiciendis inventore a
              voluptatibus minus illum labore? Nesciunt qui corporis deserunt
              omnis consequatur reiciendis, facilis aspernatur optio nam eaque
              debitis distinctio ea sapiente harum cum eius ratione amet
              voluptates, et ipsa dolorem esse repudiandae. Enim soluta eum
              alias sequi ullam quam tempore officia vitae. Assumenda ut
              accusamus animi, corrupti pariatur ipsa ipsam non blanditiis,
              voluptatum tempora cupiditate voluptas aut adipisci soluta vero!
              Quas, sequi? Corrupti, autem animi quisquam quis impedit in
              veritatis at, beatae excepturi quod sunt vero? Ipsum aspernatur
              dicta, tempore iure deleniti magni quo dignissimos praesentium
              molestias aperiam. Ad consequatur molestiae, minima pariatur quas
              nam doloremque consectetur soluta nihil! Rerum ipsam id, suscipit
              tempore tempora non a atque, hic esse blanditiis neque cupiditate
              quae quod qui nam officiis excepturi! Tenetur atque beatae
              accusamus deleniti eligendi esse culpa possimus excepturi illum
              non magni veritatis voluptatum, saepe sed quos eveniet, rem fugit
              corporis soluta aspernatur animi. Vero ipsum quasi, laudantium
              voluptatum commodi quibusdam accusamus minus maiores? Est natus
              voluptas aliquid at fugiat repudiandae porro dolores tenetur ut
              nisi commodi illo, itaque, aliquam, eligendi magnam nesciunt rerum
              enim possimus numquam? Id ipsam repellendus sint laborum possimus
              repudiandae soluta voluptas blanditiis tempore pariatur aliquid
              ullam quibusdam nisi officia dicta neque at, ea necessitatibus
              velit quod magnam amet temporibus consequatur quasi. Suscipit
              asperiores veritatis impedit animi incidunt et alias molestias
              dolore assumenda architecto fugiat dolor cum aspernatur odio
              error, cupiditate nobis qui consectetur consequuntur sapiente illo
              nihil iure quam deserunt. Nesciunt quae ut vel facere repellat
              sunt quod praesentium deleniti ad laudantium sapiente nobis
              mollitia cum atque nostrum neque nulla dolor itaque aliquid
              quibusdam eveniet perferendis nam, id a? Ipsam quaerat sed alias
              repellendus, repudiandae saepe, aliquid id, vel fugiat vitae quo
              eaque harum dicta reiciendis? Nam, eligendi eius necessitatibus ex
              perferendis vitae debitis molestiae optio, autem neque deserunt
              voluptatibus dolorem minus nisi eos quod! Explicabo natus, illum
              quaerat impedit in velit aperiam, earum voluptatum dolore
              architecto nam quae exercitationem unde provident esse assumenda
              vitae excepturi reprehenderit. Sequi, harum.
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Lexique;
