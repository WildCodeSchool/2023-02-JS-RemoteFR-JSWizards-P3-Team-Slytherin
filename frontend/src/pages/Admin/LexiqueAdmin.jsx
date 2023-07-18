import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lexique() {
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

  // Get data:

  const [lexiqueDatas, setLexiqueDatas] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [lexiqueDBFilter, setLexiqueDBFilter] = useState([]);

  const API = `${import.meta.env.VITE_BACKEND_URL}/glossary`;
  const fetchData = () => {
    axios
      .get(API)
      .then((res) => {
        setLexiqueDatas(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  useEffect(() => {
    setLexiqueDBFilter(lexiqueDatas.sort(order));
  }, [lexiqueDatas]);

  const lexiqueDB = lexiqueDatas.sort(order);

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin");
  };

  // Filtres:

  const [search, setSearch] = useState("");

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

  // Ajouter un mot:

  const [newWord, setNewWord] = useState({
    word: "",
    wordDefinition: "",
  });

  const handleChangeNewWord = (e) => {
    e.preventDefault();
    setNewWord({ ...newWord, [e.target.name]: e.target.value });
  };

  const handleSubmitNewWord = async (e) => {
    e.preventDefault();
    await axios
      .post(API, { ...newWord })
      .then(() => fetchData)
      .catch((err) => console.error(err.response.data.message));
    setRefresh(!refresh);
  };

  // Supprimer un mot:

  const handleClickDelete = async (id) => {
    await axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/glossary/${id}`)
      .catch((err) => console.error(err.response.data.message));
    setRefresh(!refresh);
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

        <p className="text-3xl text-center pt-4 text-primary">Lexique</p>
        <form onSubmit={handleSubmitNewWord}>
          <div className="mt-10 flex items-center justify-center flex-wrap">
            <input
              className="text-primary font-bold text-center w-20 sm:w-28 resize-none opacity-90"
              type="text"
              name="word"
              value={newWord.word}
              onChange={handleChangeNewWord}
            />
            <span className="p-2 text-primary">=</span>
            <input
              className="text-primary font-bold sm:w-8/12 w-32 resize-none opacity-90"
              type="text"
              name="wordDefinition"
              value={newWord.wordDefinition}
              onChange={handleChangeNewWord}
            />
            <button className="btn-list mr-4" type="submit">
              <img
                className="w-[1rem] h-[1rem]"
                src="/assets/add/add.png"
                alt="ajouter"
              />
            </button>
          </div>
        </form>

        {lexiqueDBFilter.map((e) => (
          <p key={e.id} className="pt-4 text-primary">
            <div className="flex item-center justify-between flex-col">
              <h3 className="text-primary font-bold text-left resize-none">
                {e.word} :
              </h3>
              <p className=" w-11/12 flex-wrap">{e.wordDefinition}</p>

              <button
                className="btn-list"
                type="button"
                onClick={() => handleClickDelete(e.id)}
              >
                <img
                  className="w-4 text-right"
                  src="/assets/delete/delete.png"
                  alt="supprimer"
                />
              </button>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}
export default Lexique;
