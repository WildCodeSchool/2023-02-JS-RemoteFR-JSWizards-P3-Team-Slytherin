import { Routes, Route } from "react-router-dom";
import Avis from "@pages/Avis";
import Home from "@pages/Home";
import Page404 from "@pages/Page404";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avis" element={<Avis />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
