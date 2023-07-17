import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotreSelection from "@pages/NotreSelection";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Recette from "@pages/Recette";
import Avis from "@pages/Avis";
import ProfilDegustation from "@pages/ProfilDegustation";
import Visuel from "@pages/FicheDegustation/Visuel";
import Olfactif from "@pages/FicheDegustation/Olfactif";
import GustatifPartOne from "@pages/FicheDegustation/GustatifPartOne";
import GustatifPartTwo from "@pages/FicheDegustation/GustatifPartTwo";
import Final from "@pages/FicheDegustation/Final";
import CompteRenduFiche from "@pages/CompteRenduFiche";
import LayoutAdmin from "@components/LayoutAdmin";
import HomeAdmin from "@pages/Admin/HomeAdmin";
import LexiqueAdmin from "@pages/Admin/LexiqueAdmin";
import Vins from "@pages/Admin/Vins";
import Utilisateurs from "@pages/Admin/Utilisateurs";
import Ateliers from "@pages/Admin/Ateliers";
import Atelier from "@pages/Admin/Atelier";
import ProfilModif from "@pages/ProfilModif";
import MesRecettes from "@pages/MesRecettes";
import HistoriqueFiches from "@pages/HistoriqueFiches";
import ProtectedRoutes from "@components/ProtectedRoutes";
import Page404 from "@pages/Page404";

import "./App.css";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return isAdminRoute ? (
    <LayoutAdmin>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/admin/lexique" element={<LexiqueAdmin />} />
          <Route path="/admin/vins" element={<Vins />} />
          <Route path="/admin/utilisateurs" element={<Utilisateurs />} />
          <Route path="/admin/ateliers" element={<Ateliers />} />
          <Route path="/admin/ateliers/atelier" element={<Atelier />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutAdmin>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
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
          <Route path="/recette" element={<Recette />} />
          <Route path="/profil/modifier" element={<ProfilModif />} />
          <Route path="/profil/mes_recettes" element={<MesRecettes />} />
          <Route path="/fiche" element={<CompteRenduFiche />} />
          <Route
            path="/profil/historique_fiches"
            element={<HistoriqueFiches />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
