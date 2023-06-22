export default function Atelier() {
  return (
    <div className="admin-atelier h-[calc(100%-108px)] max-w-40vw flex flex-col items-center">
      <div className="container admin-container-atelier mt-8 mb-8">
        <h1 className="text-2xl font-black mb-8">Nouvel atelier</h1>
        <button type="button" className="bouton_admin ">
          <h2>SELECTION 1</h2>
        </button>
        <button type="button" className="bouton_admin">
          <h2>SELECTION 2</h2>
        </button>
        <button type="button" className="bouton_admin">
          <h2>SELECTION 3</h2>
        </button>
        <button type="button" className="bouton_admin">
          <h2>SELECTION 4</h2>
        </button>
      </div>
      <div className="date-nombre flex justify-between">
        <button
          type="button"
          className="bouton-date bg-primary text-secondary w-28 font-black"
        >
          DATE
        </button>
        <button
          type="button"
          className="bouton-nombre bg-primary text-secondary w-28 font-black"
        >
          NOMBRE
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button type="button" className="bouton-atelier mt-12 font-black">
          CREER ATELIER
        </button>
      </div>
    </div>
  );
}
