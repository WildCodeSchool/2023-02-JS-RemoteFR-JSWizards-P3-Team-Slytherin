import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderAdmin() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const handleClick = () => {
    setActive(active === "" ? "active" : "");
  };
  const handleClickLink = () => {
    setActive("");
  };

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <>
      <header className="bg-secondary h-24 w-full z-10 fixed flex items-center justify-between">
        <Link
          to="/admin"
          className="flex items-center"
          onClick={handleClickLink}
        >
          <img
            src="/assets/logo/logo_black.png"
            className="pl-6 h-16 w-23"
            alt="Logo Inovin"
          />
          <span className="text-primary text-2xl font-bold ml-4">INOVIN</span>
        </Link>
        <label className="burger absolute z-10 top-[30%] right-5 md:hidden">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={active === "active"}
          />
          <span className="burgerline bg-primary">{}</span>
          <span className="burgerline bg-primary">{}</span>
          <span className="burgerline bg-primary">{}</span>
        </label>
        <nav className="hidden md:flex z-20 items-center gap-10 mr-14 h-20">
          <ul className="flex items-center gap-10 h-20">
            <li
              className={`text-primary text-center ${
                !isActive("/admin/lexique") ? "hover:underline" : ""
              } ${isActive("/admin/lexique") ? "font-bold active-nav" : ""}`}
            >
              <Link to="/admin/lexique">Lexique</Link>
            </li>
            <li
              className={`text-primary text-center ${
                !isActive("/admin/vins") ? "hover:underline" : ""
              } ${isActive("/admin/vins") ? "font-bold active-nav" : ""}`}
            >
              <Link to="/admin/vins">Vins</Link>
            </li>
            <li
              className={`text-primary text-center ${
                !isActive("/admin/utilisateurs") ? "hover:underline" : ""
              } ${
                isActive("/admin/utilisateurs") ? "font-bold active-nav" : ""
              }`}
            >
              <Link to="/admin/utilisateurs">Utilisateurs</Link>
            </li>
            <li
              className={`text-primary text-center ${
                !isActive("/admin/atelier") ? "hover:underline" : ""
              } ${isActive("/admin/atelier") ? "font-bold active-nav" : ""}`}
            >
              <Link to="/admin/atelier">Atelier</Link>
            </li>
          </ul>
        </nav>
      </header>
      <nav
        className={`md:hidden w-[150px] flex flex-col z-20 py-10 absolute right-0 top-[96px] rounded-bl-md menu translate-y-[-110%] ${active} bg-secondary items-center gap-10`}
      >
        <Link
          to="/admin/lexique"
          onClick={handleClickLink}
          className={`text-primary w-fit text-center ${
            !isActive("/admin/lexique") ? "hover:underline" : ""
          } ${isActive("/admin/lexique") ? "active-nav" : ""}`}
        >
          Lexique
        </Link>
        <Link
          to="/admin/vins"
          onClick={handleClickLink}
          className={`text-primary w-fit text-center ${
            !isActive("/admin/vins") ? "hover:underline" : ""
          } ${isActive("/admin/vins") ? "active-nav" : ""}`}
        >
          Vins
        </Link>
        <Link
          to="/admin/utilisateurs"
          onClick={handleClickLink}
          className={`text-primary w-fit text-center ${
            !isActive("/admin/utilisateurs") ? "hover:underline" : ""
          } ${isActive("/admin/utilisateurs") ? "active-nav" : ""}`}
        >
          Utilisateurs
        </Link>
        <Link
          to="/admin/atelier"
          onClick={handleClickLink}
          className={`text-primary w-fit text-center ${
            !isActive("/admin/atelier") ? "hover:underline" : ""
          } ${isActive("/admin/atelier") ? "active-nav" : ""}`}
        >
          Atelier
        </Link>
      </nav>
    </>
  );
}

export default HeaderAdmin;
