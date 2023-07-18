import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function Header() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const { handleClickLogOut, loggedInUser } = useUser();

  const handleClick = () => {
    setActive(active === "" ? "active" : "");
  };
  const handleClickLink = () => {
    setActive("");
  };
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="bg-primary h-24 w-full fixed z-30 flex items-center justify-between">
        <Link
          to="/selection"
          className="flex items-center"
          onClick={handleClickLink}
        >
          <img
            src="/assets/logo/logo_white.png"
            className="pl-6 h-16 w-23"
            alt="Logo Inovin"
          />
          <span className="text-secondary text-2xl font-bold ml-4">INOVIN</span>
        </Link>
        <label className="burger absolute z-10 top-[30%] right-5 lg:hidden">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={active === "active"}
          />
          <span className="burgerline">{}</span>
          <span className="burgerline">{}</span>
          <span className="burgerline">{}</span>
        </label>
        <nav className="hidden lg:flex z-20 items-center gap-10 mr-14 h-20">
          <Link
            to="/selection"
            className={`text-secondary w-[128px] text-center ${
              !isActive("/selection") ? "hover:underline" : ""
            } ${isActive("/selection") ? "active-nav" : ""}`}
          >
            Notre Sélection
          </Link>
          <Link
            to="/lexique"
            className={`text-secondary w-[72px] text-center ${
              !isActive("/lexique") ? "hover:underline" : ""
            } ${isActive("/lexique") ? "active-nav" : ""}`}
          >
            Lexique
          </Link>
          <Link
            to="/profil"
            className={`text-secondary w-[54px] text-center ${
              !isActive("/profil") ? "hover:underline" : ""
            } ${isActive("/profil") ? "active-nav" : ""}`}
          >
            Profil
          </Link>
          <Link
            to="/admin"
            className={`text-secondary text-center adBtn ${
              loggedInUser.adminStatus ? "visible" : "hidden"
            } ${!isActive("/admin") ? "hover:underline" : ""} ${
              isActive("/admin") ? "active-nav" : ""
            }`}
          >
            Admin
          </Link>
          <button
            type="button"
            onClick={handleClickLogOut}
            className="w-[54px] text-center boutonDecoOff"
          >
            <img
              src="/assets/logout/logoutwhite.svg"
              alt="Bouton de déconnexion"
              className="w-[30px]"
            />
          </button>
        </nav>
      </header>
      <nav
        className={`lg:hidden w-[150px] flex flex-col z-20 py-10 absolute right-0 top-[96px] rounded-bl-md menu translate-y-[-110%] ${active} bg-primary items-center gap-10`}
      >
        <Link
          to="/selection"
          onClick={handleClickLink}
          className={`text-secondary w-[128px] text-center ${
            !isActive("/selection") ? "hover:underline" : ""
          } ${isActive("/selection") ? "active-nav" : ""}`}
        >
          Notre Sélection
        </Link>
        <Link
          to="/lexique"
          onClick={handleClickLink}
          className={`text-secondary w-[72px] text-center ${
            !isActive("/lexique") ? "hover:underline" : ""
          } ${isActive("/lexique") ? "active-nav" : ""}`}
        >
          Lexique
        </Link>
        <Link
          to="/profil"
          onClick={handleClickLink}
          className={`text-secondary w-[54px] text-center ${
            !isActive("/profil") ? "hover:underline" : ""
          } ${isActive("/profil") ? "active-nav" : ""}`}
        >
          Profil
        </Link>
        <Link
          to="/admin"
          onClick={handleClickLink}
          className={`text-secondary text-center adBtn ${
            loggedInUser.adminStatus ? "visible" : "hidden"
          } ${!isActive("/admin") ? "hover:underline" : ""} ${
            isActive("/admin") ? "active-nav" : ""
          }`}
        >
          Admin
        </Link>
        <button
          type="button"
          onClick={handleClickLogOut}
          className="w-[54px] text-center boutonDecoOff"
        >
          <img
            src="/assets/logout/logoutwhite.svg"
            alt="Bouton de déconnexion"
            className="w-[35px]"
          />
        </button>
      </nav>
    </>
  );
}

export default Header;
