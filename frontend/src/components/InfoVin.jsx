import PropTypes from "prop-types";

function InfoVin({ image, nom, maison, millésime, desc }) {
  return (
    <div className="flex pt-[1.5rem]">
      <img src={image} alt={nom} className="w-[22%] h-full self-center" />
      <div className="flex flex-col pl-[1rem] self-center">
        <h3 className="text-[1.2rem]">{nom}</h3>
        <h3 className="text-[1.2rem]">{maison}</h3>
        <h3 className="text-[1.2rem]">{millésime}</h3>
        <h3>{desc}</h3>
      </div>
    </div>
  );
}

InfoVin.propTypes = {
  image: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  maison: PropTypes.string.isRequired,
  millésime: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default InfoVin;
