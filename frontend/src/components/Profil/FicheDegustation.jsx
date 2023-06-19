import PropTypes from "prop-types";

function FicheDegustation({ src, title }) {
  return (
    <div className="relative">
      <div>
        <div className="imgProfil">
          <img
            src={src}
            alt={title}
            className="w-full h-[4rem] object-cover pb-[0.4rem]"
          />
        </div>
        <p className="text-primary absolute w-[5%] text-center top-[52%] left-[95.2%] bg-secondary font-bold min-[476px]:left-[95%]">
          +
        </p>
      </div>
      <div>
        <p className="absolute w-full top-[25%] flex justify-center text-secondary">
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
