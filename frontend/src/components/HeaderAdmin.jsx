import { Link, useLocation } from "react-router-dom";

function HeaderAdmin() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <header className="bg-secondary h-24 w-full z-10 fixed flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img
          src="/assets/logo/logo_black.png"
          className="pl-6 h-16 w-23"
          alt="Logo Inovin"
        />
        <span className="text-primary text-2xl font-bold ml-4">INOVIN</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-10 mr-14 h-20">
          <li
            className={`text-primary w-[128px] text-center ${
              !isActive("/selection") ? "hover:underline" : ""
            } ${isActive("/selection") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/selection">Notre Sélection</Link>
          </li>
          <li
            className={`text-primary w-[72px] text-center ${
              !isActive("/lexique") ? "hover:underline" : ""
            } ${isActive("/lexique") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/lexique">Lexique</Link>
          </li>
          <li
            className={`text-primary w-[54px] text-center ${
              !isActive("/profil") ? "hover:underline" : ""
            } ${isActive("/profil") ? "font-bold active-nav" : ""}`}
          >
            <Link to="/profil">Profil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderAdmin;
