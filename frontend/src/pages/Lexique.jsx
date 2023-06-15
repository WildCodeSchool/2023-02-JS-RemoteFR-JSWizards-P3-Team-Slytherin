import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@components/Layout";

function Lexique() {
  const lexiqueDatas = [
    {
      id: 1,
      word: "Robe",
      description:
        "L’aspect visuel du vin. La dégustation commence par tout ce qui est repéré par les yeux, y compris de belles nuances dans les couleurs. Par exemple, un vin rouge pourrait posséder une robe tuilée, sombre, pourpre, ou rubis. On peut également avoir des indices de l’âge du vin en examinant sa robe : s’il est ancien, il se couvrira de reflets tuilés, notamment au niveau du disque ; pour les blancs, les vins très jeunes ont tendance à avoir des reflets légèrement verts (et les vins blancs vieux auront une couleur jaune dorée voire orangée, ambrée).",
    },
    {
      id: 2,
      word: "Nez",
      description:
        "Tout ce qui concerne les arômes du vin. Avant de le goûter, il est essentiel de le sentir, l’odorat étant un élément primordial dans la dégustation, d’autant plus qu’on sent les arômes via la rétro-olfaction (une sorte de découverte des arômes via une combinaison de l’utilisation du nez et de la bouche). Par exemple: ‘Son nez floral nous offre aussi de gourmands arômes de fruits rouges.",
    },
    {
      id: 3,
      word: "Bouquet",
      description:
        "Utilisé pour décrire les arômes complexes qui se développent dans un vin au nez. ‘Le bouquet aromatique de ce vin est charmeur avec de délicates touches de fraise et de framboise.",
    },
    {
      id: 4,
      word: "Matière",
      description:
        "La sensation suscitée par le vin en bouche, comme la texture. On utilise souvent des analogies de textures pour décrire cela. ‘Une matière d’une délicatesse infinie se déploie avec une intensité qui croit subtilement.",
    },
    {
      id: 5,
      word: "Ample",
      description:
        "Lié à la matière (pas au goût), ce terme évoque la sensation d’un vin qui est doté d’une matière enrobée en bouche et dont la palette aromatique en rétro-olfaction occupa pleinement la bouche. ‘La bouche est ample et soyeuse.",
    },
    {
      id: 6,
      word: "Tannique",
      description:
        "Se dit d’un vin puissant, qui a une forte présence tannique – les tanins sont des molécules contenues dans la peau et les pépins du raisin – ils peuvent donner un côté rugueux au vin. Pour les grands vins de garde, ces tannins s’adoucissent avec le temps. ‘La bouche assez fraîche et tannique laisse deviner un beau potentiel de garde.",
    },
    {
      id: 7,
      word: "Rond",
      description:
        "Un terme pour décrire les tannins. Cela veut dire qu’ils sont présents, mais sans agressivité, sans côté rugueux ou âpre. ‘L’attaque est vive et évolue vers une certaine rondeur.",
    },
    {
      id: 8,
      word: "Charnu",
      description:
        "Décrit à la fois la texture et la saveur. Un vin charnu aura un caractère puissant et une structure forte (structure tannique). ‘Le vin se montre particulièrement puissant comme le prouve sa texture charnue.",
    },
  ];
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  function order(a, b) {
    const bandA = a.word.toUpperCase();
    const bandB = b.word.toUpperCase();
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  const lexiqueDB = lexiqueDatas.sort(order);

  const [search, setSearch] = useState("");
  const [lexiqueDBFilter, setLexiqueDBFilter] = useState(lexiqueDB);
  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    setSearch(event.target.value);
    const words = event.target.value.toLowerCase();
    setLexiqueDBFilter(
      lexiqueDB.filter((e) => e.word.toLowerCase().includes(words))
    );
    if (event.target.value === "") {
      setLexiqueDBFilter(lexiqueDB);
    }
  };

  return (
    <Layout>
      <div className="text-secondary py-4">
        <div className="flex gap-4 items-center flex-row justify-around px-4">
          <button type="button" onClick={goBack}>
            Retour
          </button>
          <div className="flex flex-row items-center max-w-full">
            <p>🔎</p>
            <form className="p-1" onSubmit={handleSubmit}>
              <input
                className="text-primary pl-1 rounded-md"
                type="search"
                placeholder="search"
                value={search}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col mx-12 xl:mx-20">
          <p className="text-3xl text-center pt-4">Lexique</p>
          {lexiqueDBFilter.map((e) => (
            <p key={e.id} className="pt-4">
              <span className="text-tertiary font-bold">{e.word} : </span>
              {e.description}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Lexique;
