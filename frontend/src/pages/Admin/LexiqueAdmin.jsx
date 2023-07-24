import axios from "axios";
import { useState, useEffect } from "react";

export default function Lexique() {
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

  // Filtres:
  const [search, setSearch] = useState("");

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
    setNewWord({
      word: "",
      wordDefinition: "",
    });
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
    <>
      <h2 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer le lexique
      </h2>

      <div className="flex gap-6 items-center flex-col justify-around px-4">
        <div className="flex flex-row items-center">
          <label htmlFor="search">🔎</label>
          <input
            id="search"
            className="text-primary p-2 rounded"
            type="search"
            placeholder="search"
            value={search}
            onChange={handleChange}
          />
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
        <form onSubmit={handleSubmitNewWord} className="w-full">
          <div className="flex items-center justify-center flex-col md:flex-row">
            <input
              className="text-primary font-bold text-center w-20 sm:w-36 resize-none rounded py-2"
              type="text"
              placeholder="mot"
              name="word"
              value={newWord.word}
              onChange={handleChangeNewWord}
            />
            <span className="p-2 text-primary">:</span>
            <input
              className="text-primary font-bold sm:w-8/12 w-32 resize-none rounded p-2"
              type="text"
              placeholder="définition"
              name="wordDefinition"
              value={newWord.wordDefinition}
              onChange={handleChangeNewWord}
            />
            <button className="ml-3 mt-5 md:mt-0" type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center gap-3 my-6 py-4 bg-secondary rounded">
        {lexiqueDBFilter.map((e) => (
          <div
            key={e.id}
            className="pt-4 w-full text-primary flex flex-col gap-6 px-2 md:px-10"
          >
            <div className="flex item-center gap-4">
              <h3 className="text-primary w-[100px] min-w-[100px] font-bold flex items-center text-center resize-none">
                {e.word}:
              </h3>
              <div className="w-[1200px] flex-wrap">{e.wordDefinition}</div>

              <button
                className="btn-list"
                type="button"
                onClick={() => handleClickDelete(e.id)}
              >
                <img
                  className="text-right w-5"
                  src="/assets/delete/delete.png"
                  alt="supprimer"
                />
              </button>
            </div>
            <span className="bg-primary h-[1px] w-[65%] self-center" />
          </div>
        ))}
      </div>
    </>
  );
}
