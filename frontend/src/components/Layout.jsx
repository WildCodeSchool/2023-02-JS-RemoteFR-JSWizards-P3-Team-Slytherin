import PropTypes from "prop-types";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-screen bg-winebg bg-cover bg-center">
        <div className="h-screen bg-[black] bg-opacity-70 flex justify-center">
          <div className="text-secondary overflow-y-auto w-[80%] pt-24">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
