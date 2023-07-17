import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function RestrictedRoutes() {
  const { loggedInUser } = useUser();
  const location = useLocation();

  if (!loggedInUser.firstname) {
    return <Navigate to="/" replace />;
  }

  const allowedUserRoutes = [
    "/avis",
    "/lexique",
    "/selection",
    "/fiche/visuel",
    "/fiche/olfactif",
    "/fiche/gustatif-part1",
    "/fiche/gustatif-part2",
    "/fiche/final",
    "/profil",
    "/profil/profil_degustation",
    "/recette",
    "/profil/modifier",
    "/fiche",
    "/profil/historique_fiches",
    "/profil/mes_recettes",
  ];

  if (!allowedUserRoutes.includes(location.pathname)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

function AdminRoutes() {
  const { loggedInUser } = useUser();

  if (!loggedInUser.firstname) {
    return <Navigate to="/" replace />;
  }

  if (!loggedInUser.adminStatus) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

function ProtectedRoutes() {
  const { loggedInUser } = useUser();

  if (!loggedInUser.adminStatus) {
    return <RestrictedRoutes />;
  }
  return <AdminRoutes />;
}

export default ProtectedRoutes;
