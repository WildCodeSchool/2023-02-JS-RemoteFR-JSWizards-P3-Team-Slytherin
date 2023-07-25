import { useEffect, useState } from "react";
import axios from "axios";
import VinLayout from "@components/admin/VinLayout";

export default function Vins() {
  const isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;

  const [vinData, setVinData] = useState([]);
  const [vinDataFilter, setVinDataFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [selectedRowData, setSelectedRowData] = useState({
    id: "",
    wineName: "",
    castle: "",
    grapeVariety: "",
    wineYear: "2023",
    wineDescription: "",
    wineType: "",
    wineImage: "defaultwine.jpg",
  });
  const [refresh, setRefresh] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setSearch("");
    setVinDataFilter(vinData.sort((a, b) => b.id - a.id));
  };

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...vinDataFilter].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA === null || valueA === undefined) return -1;
      if (valueB === null || valueB === undefined) return 1;

      if (valueA < valueB) {
        return direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setVinDataFilter(sortedData);
    setSortConfig({ key, direction });
  };

  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    setSearch(event.target.value);
    const words = event.target.value.toLowerCase();
    setVinDataFilter(
      vinData.filter((e) => e.wineName.toLowerCase().includes(words))
    );
    if (event.target.value === "") {
      setVinDataFilter(vinData);
    }
  };

  const handleWine = () => {
    setSelectedRowData({
      id: "",
      wineName: "",
      castle: "",
      grapeVariety: "",
      wineYear: "2023",
      wineDescription: "",
      wineType: "",
      wineImage: "defaultwine.jpg",
    });
    setHidden(!hidden);
  };

  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setHidden(!hidden);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/wines`)
      .then((res) => {
        setVinData(res.data.sort((a, b) => b.id - a.id));
        setVinDataFilter(res.data.sort((a, b) => b.id - a.id));
      })
      .catch((err) => console.error(err));
  }, [refresh]);

  return (
    <>
      <h2 className="mt-16 mb-6 text-2xl text-center font-bold">
        Gérer les vins
      </h2>
      <div className="flex flex-col gap-6">
        <button type="button" onClick={handleWine} className="self-center">
          Ajouter un vin
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
        <table className="w-full min-w-[480px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <thead>
            <tr className="flex justify-center p-3 px-10">
              <th className="flex-0 w-16">Image</th>
              <th
                className="flex-1 min-w-[280px]"
                onClick={() => sortTable("wineName")}
              >
                Nom{" "}
                {sortConfig.key === "wineName" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th
                className="flex-1 min-w-[300px] max-[1100px]:hidden"
                onClick={() => sortTable("castle")}
              >
                Domaine{" "}
                {sortConfig.key === "castle" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-1" onClick={() => sortTable("wineType")}>
                Type{" "}
                {sortConfig.key === "wineType" &&
                  (sortConfig.direction === "ascending" ? "▼" : "▲")}
              </th>
              <th className="flex-0">Modifier</th>
            </tr>
          </thead>
          <tbody>
            {vinDataFilter.map((e) => (
              <tr
                className="h-14 flex justify-center p-3 px-10 shadow-inner"
                key={e.id}
              >
                <td className="flex-0 w-16">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                      e.wineImage
                    }`}
                    onError={(imgerr) => {
                      const img = imgerr;
                      img.target.onerror = null;
                      img.target.src = `${
                        import.meta.env.VITE_BACKEND_URL
                      }/assets/wines/defaultwine.jpg`;
                    }}
                    alt="miniature"
                    className="h-11 rounded"
                  />
                </td>
                <td className="flex-1 min-w-[280px]">{e.wineName}</td>
                <td className="flex-1 min-w-[300px] max-[1100px]:hidden">
                  {e.castle}
                </td>
                <td className="flex-1">{e.wineType}</td>
                <td className="flex-0 w-[70px]">
                  <button
                    type="button"
                    className="editbtn"
                    onClick={() => handleRowClick(e)}
                  >
                    <img
                      src="/assets/editpen/editpen.png"
                      alt="modify"
                      className="h-5 cursor-pointer"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <VinLayout
        selectedRowData={selectedRowData}
        hidden={hidden}
        setHidden={setHidden}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </>
  );
}
