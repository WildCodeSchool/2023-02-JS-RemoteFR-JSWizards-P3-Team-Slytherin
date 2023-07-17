import { Link } from "react-router-dom";

export default function HomeAdmin() {
  return (
    <div className="container admin-container">
      <div className="row">
        <Link to="/admin/ateliers" className="bouton_admin">
          <h2 className="w-full">Gérer atelier</h2>
        </Link>
        <Link to="/admin/vins" className="bouton_admin">
          <h2>Gérer vin</h2>
        </Link>
      </div>
      <div className="row">
        <Link to="/admin/utilisateurs" className="bouton_admin">
          <h2>Gérer utilisateur</h2>
        </Link>
        <Link to="/admin/lexique" className="bouton_admin">
          <h2>Gérer lexique</h2>
        </Link>
      </div>
    </div>
  );
}
