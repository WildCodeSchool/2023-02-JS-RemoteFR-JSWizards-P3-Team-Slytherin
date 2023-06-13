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
        <ul className="flex items-center gap-10 mr-14 h-20">
          <li
            className={`text-secondary ${
              !isActive("/selection") ? "hover:underline" : ""
            } ${
              isActive("/selection") ? "text-tertiary font-bold active-nav" : ""
            }`}
          >
            <Link to="/selection">Notre Sélection</Link>
          </li>
          <li
            className={`text-secondary ${
              !isActive("/lexique") ? "hover:underline" : ""
            } ${
              isActive("/lexique") ? "text-tertiary font-bold active-nav" : ""
            }`}
          >
            <Link to="/lexique">Lexique</Link>
          </li>
          <li
            className={`text-secondary ${
              !isActive("/profil") ? "hover:underline" : ""
            } ${
              isActive("/profil") ? "text-tertiary font-bold active-nav" : ""
            }`}
          >
            <Link to="/profil">Profil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
