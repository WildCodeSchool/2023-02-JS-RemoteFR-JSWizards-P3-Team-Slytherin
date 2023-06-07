import { Routes, Route } from "react-router-dom";
import Profil from "@pages/Profil";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

export default App;
