import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function HeaderAdmin() {
  const location = useLocation();
  const { handleClickLogOut, loggedInUser } = useUser();
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
        <label className="burger absolute z-10 top-[30%] right-5 lg:hidden">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={active === "active"}
          />
          <span className="burgerline bg-primary">{}</span>
          <span className="burgerline bg-primary">{}</span>
          <span className="burgerline bg-primary">{}</span>
        </label>
        <nav className="hidden lg:flex z-20 items-center gap-10 mr-14 h-20">
          <ul className="flex items-center gap-10 h-20">
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
                !isActive("/admin/ateliers") ? "hover:underline" : ""
              } ${isActive("/admin/ateliers") ? "font-bold active-nav" : ""}`}
            >
              <Link to="/admin/ateliers">Ateliers</Link>
            </li>
            <li
              className={`text-primary  w-[128px] text-center utBtn ${
                loggedInUser.adminStatus ? "visible" : "hidden"
              } ${!isActive("/selection") ? "hover:underline" : ""} ${
                isActive("/selection") ? "font-bold active-nav" : ""
              }`}
            >
              <Link to="/selection">Vue Utilisateur</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleClickLogOut}
                className="w-[54px] text-center boutonDecoOff"
              >
                <img
                  src="/assets/logout/logoutblack.svg"
                  alt="Bouton de déconnexion"
                  className="w-[30px]"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <nav
        className={`lg:hidden w-[150px] flex flex-col z-20 py-10 absolute right-0 top-[96px] rounded-bl-md menu translate-y-[-110%] ${active} bg-secondary items-center gap-10`}
      >
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
          to="/admin/ateliers"
          onClick={handleClickLink}
          className={`text-primary w-fit text-center ${
            !isActive("/admin/ateliers") ? "hover:underline" : ""
          } ${isActive("/admin/ateliers") ? "active-nav" : ""}`}
        >
          Ateliers
        </Link>
        <Link
          to="/selection"
          onClick={handleClickLink}
          className={`text-primary  w-[128px] text-center utBtn ${
            loggedInUser.adminStatus ? "visible" : "hidden"
          } ${!isActive("/selection") ? "hover:underline" : ""} ${
            isActive("/selection") ? "font-bold active-nav" : ""
          }`}
        >
          Vue Utilisateur
        </Link>
        <button
          type="button"
          onClick={handleClickLogOut}
          className="w-[54px] text-center boutonDecoOff"
        >
          <img
            src="/assets/logout/logoutblack.svg"
            alt="Bouton de déconnexion"
            className="w-[30px]"
          />
        </button>
      </nav>
    </>
  );
}

export default HeaderAdmin;
