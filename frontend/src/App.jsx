import { Routes, Route } from "react-router-dom";
import Lexique from "@pages/Lexique";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lexique" element={<Lexique />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
