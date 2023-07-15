import PropTypes from "prop-types";

function ClientInfoProfil({ email, birthday }) {
  return (
    <>
      <p className="pt-[1.5rem] text-lg">{email}</p>
      <p className="pb-[1.8rem] text-lg">{birthday}</p>
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
