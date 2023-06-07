import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Page404 />} />
      <Route path="catalogue" element={<Catalogue />} />
    </Routes>
  );
}

export default App;
