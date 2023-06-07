import PropTypes from "prop-types";

function ClientInfoProfil({ email, birthday }) {
  return (
    <>
      <p className="pt-[1.5rem]">{email}</p>
      <p>{birthday}</p>
    </>
  );
}

ClientInfoProfil.propTypes = {
  email: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};

export default ClientInfoProfil;
