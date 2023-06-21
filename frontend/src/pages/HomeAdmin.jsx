export default function HomeAdmin() {
  return (
    <div className="container admin-container">
      <div className="row">
        <button type="button" className="bouton_admin ">
          <h2>Crée atelier</h2>
        </button>
        <button type="button" className="bouton_admin">
          <h2>Gérer vins</h2>
        </button>
      </div>
      <div className="row">
        <button type="button" className="bouton_admin">
          <h2>Voir utilisateur</h2>
        </button>
        <button type="button" className="bouton_admin">
          <h2>Gérer lexique</h2>
        </button>
      </div>
    </div>
  );
}
