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
    <div className="flex flex-row bg-secondary">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/wines/${wineImage}`}
        alt={`vin ${wineName}`}
        className="w-20 h-32"
      />
      <div className="flex flex-col items-center">
        <p>{wineName}</p>
        <p>{wineYear}</p>
        <p>{castle}</p>
        <p>{grapeVariety}</p>
        <p>{wineDescription}</p>
        <p>{wineType}</p>
      </div>
    </div>
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
