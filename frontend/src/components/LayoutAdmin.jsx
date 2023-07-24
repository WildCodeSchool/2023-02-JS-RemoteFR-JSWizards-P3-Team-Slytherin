import PropTypes from "prop-types";
import HeaderAdmin from "./HeaderAdmin";

export default function Layout({ children }) {
  return (
    <>
      <HeaderAdmin />
      <div className="h-screen bg-winebg bg-cover bg-center admin-scroll-bar">
        <div className="h-screen bg-secondary bg-opacity-70 flex justify-center">
          <div className="text-[black] w-[80%] pt-24">
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
