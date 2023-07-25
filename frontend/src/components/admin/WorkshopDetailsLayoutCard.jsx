import PropTypes from "prop-types";

export default function WorkshopDetailsLayoutCard({
  wineName,
  wineImage,
  wineYear,
  castle,
  grapeVariety,
  wineDescription,
  wineType,
}) {
  return (
    <>
      <hr />
      <div className="flex flex-row items-center bg-secondary">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${wineImage}`}
          alt={`vin ${wineName}`}
          className="w-20 h-32"
        />
        <div className="flex flex-col items-start p-2">
          <p className="font-bold text-xl">
            {wineName} ({wineYear})
          </p>
          <div className="flex flex-row gap-8">
            <p>Château : {castle}</p>
            <p>Cépage : {grapeVariety}</p>
            <p>Type : {wineType}</p>
          </div>

          <p className="text-xs italic p-2">{wineDescription}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

WorkshopDetailsLayoutCard.propTypes = {
  wineName: PropTypes.string.isRequired,
  castle: PropTypes.string.isRequired,
  grapeVariety: PropTypes.string.isRequired,
  wineYear: PropTypes.number.isRequired,
  wineDescription: PropTypes.string.isRequired,
  wineType: PropTypes.string.isRequired,
  wineImage: PropTypes.string.isRequired,
};
