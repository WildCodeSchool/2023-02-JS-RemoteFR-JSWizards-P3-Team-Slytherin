import PropTypes from "prop-types";
import WorkshopDetailsLayoutCard from "./WorkshopDetailsLayoutCard";

export default function WorkshopDetailsLayout({
  selectedDetailedWorkshop,
  hiddenDetails,
  setHiddenDetails,
}) {
  const handleParentClick = (e) => {
    if (e.target === e.currentTarget) {
      setHiddenDetails(!hiddenDetails);
    }
  };

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      setHiddenDetails(!hiddenDetails);
    }
  }

  return (
    <div className={`${!hiddenDetails ? "hidden" : ""}`}>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="fullscreen-overlay bg-primary"
        onClick={handleParentClick}
      >
        <div className="rounded bg-secondary h-[80%] w-[80%] p-5 flex flex-col items-center cursor-default overflow-scroll">
          <p className="font-bold text-2xl">
            Détails de l'atelier du {selectedDetailedWorkshop[0].workshopDate}
          </p>
          <div className="flex flex-col">
            {selectedDetailedWorkshop.map((e) => (
              <WorkshopDetailsLayoutCard
                key={e.id}
                wineName={e.wineName}
                wineImage={e.wineImage}
                wineYear={e.wineYear}
                castle={e.castle}
                grapeVariety={e.grapeVariety}
                wineDescription={e.wineDescription}
                wineType={e.wineType}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

WorkshopDetailsLayout.propTypes = {
  selectedDetailedWorkshop: PropTypes.shape.isRequired,
  hiddenDetails: PropTypes.bool.isRequired,
  setHiddenDetails: PropTypes.func.isRequired,
};
