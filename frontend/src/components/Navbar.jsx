function Navbar() {
  return (
    <header className="bg-primary h-24 flex items-center justify-between">
      <img src="/assets/logo/logo_white.png" className="h-16" alt="" />
      <nav className="text-secondary">
        <a href="/catalogue" className="mr-5">
          Catalogue
        </a>
        <a href="/lexique" className="mr-5">
          Lexique
        </a>
        <a href="/profil" className="mr-5">
          Profil
        </a>
        <a href="/avis" className="mr-5 sm:mr-20">
          Avis
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
