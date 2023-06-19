import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";
import NotreSelection from "@pages/NotreSelection";
import Profil from "@pages/Profil";
import Lexique from "@pages/Lexique";
import Avis from "@pages/Avis";
import ProfilDegustation from "@pages/ProfilDegustation";
import Page404 from "@pages/Page404";
import LayoutAdmin from "@components/LayoutAdmin";
import HomeAdmin from "@pages/HomeAdmin";
import "./App.css";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return isAdminRoute ? (
    <LayoutAdmin>
      <Routes>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/avis" element={<Avis />} />
        <Route path="/admin/lexique" element={<Lexique />} />
        <Route path="/admin/selection" element={<NotreSelection />} />
        <Route path="/admin/profil" element={<Profil />} />
        <Route
          path="/admin/profil/profil_degustation"
          element={<ProfilDegustation />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutAdmin>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/lexique" element={<Lexique />} />
        <Route path="/selection" element={<NotreSelection />} />
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
