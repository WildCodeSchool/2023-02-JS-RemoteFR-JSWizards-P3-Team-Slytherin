import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Catalogue from "@pages/Catalogue";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Avis from "@pages/Avis";
import Page404 from "@pages/Page404";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avis" element={<Avis />} />
      <Route path="/lexique" element={<Lexique />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
