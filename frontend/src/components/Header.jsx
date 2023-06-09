import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <header className="bg-primary h-24 w-full z-10 fixed flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img
          src="/assets/logo/logo_white.png"
          className="h-16 w-23"
          alt="Logo Inovin"
        />
        <span className="text-secondary text-2xl font-bold ml-4">INOVIN</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-10">
          <li>
            <Link
              to="/catalogue"
              className={`text-secondary ${
                !isActive("/catalogue") ? "hover:underline" : ""
              } ${
                isActive("/catalogue") ? "border-2 border-secondary p-1" : ""
              }`}
            >
              Catalogue
            </Link>
          </li>
          <li>
            <Link
              to="/lexique"
              className={`text-secondary ${
                !isActive("/lexique") ? "hover:underline" : ""
              } ${isActive("/lexique") ? "border-2 border-secondary p-1" : ""}`}
            >
              Lexique
            </Link>
          </li>
          <li>
            <Link
              to="/profil"
              className={`text-secondary ${
                !isActive("/profil") ? "hover:underline" : ""
              } ${isActive("/profil") ? "border-2 border-secondary p-1" : ""}`}
            >
              Profil
            </Link>
          </li>
          <li className="mr-10">
            <Link
              to="/avis"
              className={`text-secondary ${
                !isActive("/avis") ? "hover:underline" : ""
              } ${isActive("/avis") ? "border-2 border-secondary p-1" : ""}`}
            >
              Avis
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
