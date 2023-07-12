import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function VinLayout({
  selectedRowData,
  hidden,
  setHidden,
  deleteWine,
}) {
  const [wineInfo, setWineInfo] = useState({
    id: selectedRowData.id,
    wineName: selectedRowData.wineName,
    castle: selectedRowData.castle,
    grapeVariety: selectedRowData.grapeVariety,
    wineYear: selectedRowData.wineYear,
    wineDescription: selectedRowData.wineDescription,
    wineType: selectedRowData.wineType,
    wineImage: selectedRowData.wineImage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWineInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, index) =>
    String(currentYear - index)
  );

  const [uploadPicture, setUploadPicture] = useState("");
  const [sendPicture, setSendPicture] = useState();

  const handleUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPicture(reader.result);
        setWineInfo((prevState) => ({
          ...prevState,
          wineImage: file.name,
        }));
        // console.info(reader.result);
      };
      reader.readAsDataURL(file);
      setSendPicture(file);
    };
    fileInput.click();
  };

  // console.log(uploadPicture);
  // console.log(wineInfo.wineImage);

  const handleParentClick = (e) => {
    if (e.target === e.currentTarget) {
      setHidden(!hidden);
      setUploadPicture("");
    }
  };

  useEffect(() => {
    setWineInfo({
      id: selectedRowData.id,
      wineName: selectedRowData.wineName,
      castle: selectedRowData.castle,
      grapeVariety: selectedRowData.grapeVariety,
      wineYear: selectedRowData.wineYear,
      wineDescription: selectedRowData.wineDescription,
      wineType: selectedRowData.wineType,
      wineImage: selectedRowData.wineImage,
    });
  }, [selectedRowData]);

  const handleSubmit = () => {
    const fd = new FormData();
    fd.append("wineimg", sendPicture);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/wines/upload`, fd)
      .catch((err) => console.error(err));
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/wines/${wineInfo.id}`, wineInfo)
      .catch((err) => console.error(err));
  };
  // console.log(wineInfo);
  // const handleSubmit = () => {
  //   axios
  //     .put(`${import.meta.env.VITE_BACKEND_URL}/wines/${wineInfo.id}`, wineInfo)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.error(err));
  // };

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setHidden(!hidden);
    }
  }
  return (
    <div className={`${!hidden ? "hidden" : ""}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="fullscreen-overlay bg-primary"
        onClick={handleParentClick}
      >
        <div className="rounded bg-secondary h-[80%] w-[80%] p-5 flex flex-col items-center cursor-default overflow-scroll">
          <section className="flex w-full gap-4">
            <div className="image-container">
              <input
                type="image"
                src={
                  uploadPicture.length > 0
                    ? uploadPicture
                    : `${import.meta.env.VITE_BACKEND_URL}/assets/wines/${
                        wineInfo.wineImage
                      }`
                }
                alt="Vin"
                className="image-button"
                onClick={handleUpload}
              />
            </div>
            <div className="flex flex-col gap-3 justify-center w-full">
              <div className="w-full flex items-center">
                <label htmlFor="wineName" className="whitespace-nowrap">
                  Nom :{" "}
                </label>
                <input
                  type="text"
                  name="wineName"
                  id="wineName"
                  value={wineInfo.wineName}
                  onChange={handleChange}
                  className="font-bold bg-[#f8f8f8] rounded p-2 w-full"
                />
              </div>

              <div className="flex items-center">
                <label htmlFor="castle" className="whitespace-nowrap">
                  Domaine :{" "}
                </label>
                <input
                  type="text"
                  name="castle"
                  id="castle"
                  value={wineInfo.castle}
                  onChange={handleChange}
                  className="font-bold bg-[#f8f8f8] rounded p-2 w-full"
                />
              </div>
              <div className="min-w-fit w-2/4 text-center">
                <label htmlFor="grapeVariety" className="w-fit">
                  Cépage :{" "}
                </label>
                <input
                  type="text"
                  name="grapeVariety"
                  id="grapeVariety"
                  value={wineInfo.grapeVariety}
                  onChange={handleChange}
                  className="font-bold bg-[#f8f8f8] rounded p-2"
                />
              </div>
            </div>
          </section>
          <section className="mt-6 w-full flex flex-col items-center">
            <div className="flex w-[80%]">
              <div className="w-full flex items-center">
                <label htmlFor="wineYear" className="whitespace-nowrap">
                  Année :{" "}
                </label>
                <select
                  name="wineYear"
                  id="wineYear"
                  value={wineInfo.wineYear}
                  onChange={handleChange}
                  className="font-bold bg-[#f8f8f8] rounded p-2"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-2/4 text-center">
                <label htmlFor="wineType">Type : </label>
                <select
                  name="wineType"
                  id="wineType"
                  onChange={handleChange}
                  className="font-bold bg-[#f8f8f8] rounded p-2"
                >
                  <option value={selectedRowData.wineType}>
                    {selectedRowData.wineType}
                  </option>
                  <option
                    value={
                      selectedRowData.wineType === "rouge" ? "blanc" : "rouge"
                    }
                  >
                    {selectedRowData.wineType === "rouge" ? "blanc" : "rouge"}
                  </option>
                </select>
              </div>
            </div>
            <div className="my-4 w-[70%] flex flex-col items-start">
              <label htmlFor="wineDescription" className="ml-4">
                Description :{" "}
              </label>
              <textarea
                name="wineDescription"
                id="wineDescription"
                onChange={handleChange}
                className="rounded p-2 w-full h-48 bg-[#f8f8f8] resize-none"
                value={wineInfo.wineDescription}
              />
            </div>
          </section>
          <section className="flex w-[80%] justify-evenly gap-6">
            <button
              type="submit"
              className="delete-button"
              onClick={() => {
                deleteWine(wineInfo.id);
                setUploadPicture("");
              }}
            >
              Supprimer Vin
            </button>
            <button type="submit" onClick={handleSubmit}>
              Valider
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

VinLayout.propTypes = {
  selectedRowData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wineName: PropTypes.string,
    castle: PropTypes.string,
    grapeVariety: PropTypes.string,
    wineYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wineDescription: PropTypes.string,
    wineType: PropTypes.string,
    wineImage: PropTypes.string,
  }).isRequired,
  hidden: PropTypes.bool.isRequired,
  setHidden: PropTypes.func.isRequired,
  deleteWine: PropTypes.func.isRequired,
};
