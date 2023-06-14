import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotreSelection from "@pages/NotreSelection";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Avis from "@pages/Avis";
import ProfilDegustation from "@pages/ProfilDegustation";
import Visuel from "@pages/FicheDegustation/Visuel";
import Olfactif from "@pages/FicheDegustation/Olfactif";
import GustatifPartOne from "@pages/FicheDegustation/GustatifPartOne";
import GustatifPartTwo from "@pages/FicheDegustation/GustatifPartTwo";
import Final from "@pages/FicheDegustation/Final";
import Page404 from "@pages/Page404";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/lexique" element={<Lexique />} />
        <Route path="/selection" element={<NotreSelection />} />
        <Route path="/fiche/visuel" element={<Visuel />} />
        <Route path="/fiche/olfactif" element={<Olfactif />} />
        <Route path="/fiche/gustatif-part1" element={<GustatifPartOne />} />
        <Route path="/fiche/gustatif-part2" element={<GustatifPartTwo />} />
        <Route path="/fiche/final" element={<Final />} />
        <Route path="/profil" element={<Profil />} />
        <Route
          path="/profil/profil_degustation"
          element={<ProfilDegustation />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
