import fakedata from "../../components/Data/data-wine";

export default function Vins() {
  return (
    <>
      <h1 className="mt-16 mb-6 text-2xl font-bold">Gérer les vins</h1>
      <div className="flex flex-col items-center gap-6">
        <button type="button">Ajouter un vin</button>
        <table className="w-full min-w-[480px] bg-secondary rounded mb-8 shadow-md overflow-scroll">
          <tr className="flex justify-center p-3">
            <th className="flex-1">Image</th>
            <th className="flex-1">Nom</th>
            <th className="flex-1">Couleur</th>
            <th className="flex-0">Modifier</th>
          </tr>
          {fakedata.map((e) => (
            <tr className="h-14 flex justify-center p-3 shadow-inner">
              <td className="flex-1">
                <img src={e.image} alt="miniature" className="h-11 rounded" />
              </td>
              <td className="flex-1">{e.name}</td>
              <td className="flex-1">{e.note}</td>
              <td className="flex-0 w-[70px]">
                <img
                  src="../../../public/assets/editpen/editpen.png"
                  alt="modify"
                  className="h-5 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
