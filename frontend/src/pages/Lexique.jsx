import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lexique() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [lexiqueDatas, setLexiqueDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/glossary`)
      .then((res) => {
        setLexiqueDatas(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

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
  const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
  const handleClick = () => {
    setSearch("");
    setLexiqueDBFilter(lexiqueDB);
  };
  return (
    <div>
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
            {isFirefox && (
              <button
                className="flex justify-center text-xl font-bold items-center bg-secondary rounded-full text-primary lexique-button"
                type="button"
                onClick={handleClick}
              >
                <span className="lexique-button-content">&times;</span>
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-col mx-12 xl:mx-20">
          <p className="text-3xl text-center pt-4">Lexique</p>
          {lexiqueDBFilter.map((e) => (
            <p key={e.id} className="pt-4">
              <span className="text-tertiary font-bold">{e.word} : </span>
              {e.wordDefinition}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Lexique;
