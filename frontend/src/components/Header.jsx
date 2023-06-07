import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-primary h-24 w-full z-10 fixed flex items-center justify-between">
      <Link to="/">
        <img
          src="/assets/logo/logo_white.png"
          className="h-16 w-16"
          alt="Logo Inovin"
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-10">
          <li className="text-secondary">
            <Link to="catalogue">Catalogue</Link>
          </li>
          <li className="text-secondary">
            <Link to="lexique">Lexique</Link>
          </li>
          <li className="text-secondary">
            <Link to="profil">Profil</Link>
          </li>
          <li className="mr-10 text-secondary">
            <Link to="avis">Avis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
