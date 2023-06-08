import PropTypes from "prop-types";

function FicheDegustation({ src, title }) {
  return (
    <div className="relative fiche">
      <div>
        <img
          src={src}
          alt="whitewinephoto"
          className="w-full h-[4rem] object-cover pb-[0.4rem] opacity-100 transition duration-[0.5s] ease-in-out imgProfil"
        />
        <p className="text-primary absolute w-[5%] text-center top-[52%] left-[95.2%] bg-secondary font-bold min-[476px]:left-[95%]">
          +
        </p>
      </div>
      <div>
        <p className="absolute opacity-0 transition duration-[0.5s] ease-in-out top-[50%] left-[50%] text-secondary text-center textImgProfil">
          {title}
        </p>
      </div>
    </div>
  );
}

FicheDegustation.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FicheDegustation;
