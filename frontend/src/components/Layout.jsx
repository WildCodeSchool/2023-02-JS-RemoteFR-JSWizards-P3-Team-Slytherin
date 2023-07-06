import PropTypes from "prop-types";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="h-screen bg-winebg bg-cover bg-center">
        <div className="h-screen bg-[black] bg-opacity-70 flex justify-center">
          <div className="text-secondary w-[80%] pt-24">
            <main className="h-full overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
