import { Routes, Route } from "react-router-dom";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lexique" element={<Lexique />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

export default App;
