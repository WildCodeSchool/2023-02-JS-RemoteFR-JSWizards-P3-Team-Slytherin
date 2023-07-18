import PropTypes from "prop-types";

function ClientInfoProfil({ email, birthday }) {
  const formattedBirthDate = birthday?.split("T")[0];
  return (
    <>
      <p className="pt-[1.5rem] text-lg">
        <span className="font-bold">Email :</span> {email}
      </p>
      <p className="pb-[1.8rem] text-lg">
        <span className="font-bold">Date de naissance :</span>{" "}
        {formattedBirthDate}
      </p>
    </>
  );
}

ClientInfoProfil.propTypes = {
  email: PropTypes.string.isRequired,
  birthday: PropTypes.string,
};

ClientInfoProfil.defaultProps = {
  birthday: "",
};

export default ClientInfoProfil;
