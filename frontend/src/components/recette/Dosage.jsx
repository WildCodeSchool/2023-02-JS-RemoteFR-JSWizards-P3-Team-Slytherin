import PropTypes from "prop-types";

function Dosage({ index, dosage, setDosage, registeredDosage }) {
  function decDosage(event) {
    const nextDosage = dosage.map((e, i) => {
      if (Number(event.target.id) === i) {
        return e - 5;
      }
      return e;
    });
    setDosage(nextDosage);
  }
  function incDosage(event) {
    const nextDosage = dosage.map((e, i) => {
      if (Number(event.target.id) === i) {
        return e + 5;
      }
      return e;
    });
    setDosage(nextDosage);
  }

  return (
    <div className="recetteButtons max-md:mt-4 flex flex-row justify-center items-center">
      {dosage[index] - 5 >= registeredDosage[index] ? (
        <button type="submit" onClick={decDosage} id={index}>
          -
        </button>
      ) : (
        <p className="font-bold text-4xl text-[grey] text-opacity-100">-</p>
      )}
      <p className="font-bold mx-6 text-xl bg-secondary text-primary rounded-md flex px-4 justify-end items-center w-28 h-[54px]">
        {`${dosage[index]} ml`}
      </p>
      {dosage.reduce((a, b) => a + b, 0) + 5 <= 250 ? (
        <button type="submit" onClick={incDosage} id={index}>
          +
        </button>
      ) : (
        <p className="font-bold text-4xl text-[grey] text-opacity-100">+</p>
      )}
    </div>
  );
}

export default Dosage;

Dosage.propTypes = {
  index: PropTypes.number.isRequired,
  dosage: PropTypes.arrayOf(PropTypes.number).isRequired,
  setDosage: PropTypes.func.isRequired,
  registeredDosage: PropTypes.arrayOf(PropTypes.number).isRequired,
};
