import { Link, useParams } from "react-router-dom";
import { useChoice } from "@contexts/ChoiceContext";
import { useUser } from "@contexts/UserContext";
import axios from "axios";
import VinEnCoursCR from "@components/VinEnCoursCR";
import { useEffect, useState } from "react";

function CompteRenduVin() {
  const { id } = useParams();

  const { selection } = useChoice();

  const { loggedInUser } = useUser();

  const [vin, setVin] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(
            `${import.meta.env.VITE_BACKEND_URL}/tasting/users/${
              loggedInUser.id
            }/workshops/${selection[0].id_workshop}/wines/${id}`
          )
          .then((res) => {
            setVin(res.data);
          })
          .catch((err) => console.error(err));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);

  if (isLoading) {
    return <>ça charge</>;
  }
  return (
    <div>
      <div className="md:px-[3rem] min-[950px]:px-[7.5rem]">
        <div className="flex justify-between text-xl pt-[2rem]">
          <h2>Fiche dégustation</h2>
          <h2>{`${day}/${month}/${year}`}</h2>
        </div>
        <div>
          <VinEnCoursCR id={id} />
        </div>
        <div className="compteRendu max-sm:compteRenduMaxSm max-[500px]:compteRenduMin">
          <h2 className="font-bold uppercase text-[1.5rem] text-center borderGrid3 flex flex-col justify-center max-sm:borderGrid3MaxSm max-[500px]:borderGrid3Min">
            La note
          </h2>
          <p className="row-start-2 row-end-3 text-[1.7rem] text-center borderGrid2 flex flex-col justify-center max-sm:borderGrid2MaxSm max-[500px]:borderGrid2Min">
            {vin.score}/10
          </p>
          <h2 className="col-start-1 col-end-2 font-bold uppercase text-[1.5rem] text-center flex flex-col justify-center max-sm:col-start-2 max-sm:col-end-3 max-sm:row-start-1 max-sm:row-end-2">
            La vue
          </h2>
          <div className="col-start-1 col-end-2 text-[1.1rem] pl-[0.8rem] flex flex-col justify-center borderGrid1 max-sm:row-start-2 max-sm:row-end-2 max-sm:col-start-2 max-sm:col-end-3 max-sm:borderGrid1MaxSm max-[500px]:borderGrid1Min">
            <p>
              <span className="font-bold">Couleur :</span> {vin.color}
            </p>
            <p>
              <span className="font-bold">Limpidité :</span> {vin.clarity}
            </p>
            <p>
              <span className="font-bold">Densité :</span> {vin.density}
            </p>
          </div>
          <h2 className="col-start-2 col-end-3 row-start-1 row-end-2 font-bold uppercase text-[1.5rem] text-center flex flex-col justify-center max-sm:row-start-3 max-sm:row-end-4 max-sm:col-start-1 max-sm:col-end-3 max-[500px]:borderGrid5Min">
            Le nez
          </h2>
          <div className="row-start-2 row-end-5 text-[1.1rem] pl-[0.8rem] flex flex-col justify-center max-sm:row-start-4 max-sm:row-end-5 max-sm:col-start-1 max-sm:col-end-3">
            <p>
              <span className="font-bold">Intensité :</span> {vin.intensity}
            </p>
            <h3 className="text-[1.3rem] text-center pt-[0.4rem] pb-[0.4rem]">
              Familles aromatiques
            </h3>
            <p>
              <span className="font-bold">Fruits :</span> {vin.noseFruits}
            </p>
            <p>
              <span className="font-bold">Fleurs :</span> {vin.noseFlowers}
            </p>
            <p>
              <span className="font-bold">Végétal :</span> {vin.nosePlants}
            </p>
            <p>
              <span className="font-bold">Épice :</span> {vin.noseSpices}
            </p>
            <p>
              <span className="font-bold">Ampyreumatique :</span>{" "}
              {vin.noseAmpyreumatique}
            </p>
            <p>
              <span className="font-bold">Minéral :</span> {vin.noseMineral}
            </p>
          </div>
          <h2 className="col-start-1 col-end-3 row-start-5 row-end-6 font-bold uppercase text-[1.5rem] text-center borderGrid4 flex flex-col justify-center max-[500px]:borderGrid4Min">
            La bouche
          </h2>
          <div className="text-[1.1rem] pl-[0.8rem] flex flex-col justify-center">
            <p>
              <span className="font-bold">Persistance :</span> {vin.persistance}
            </p>
            <p>
              <span className="font-bold">Moelleux :</span> {vin.smooth}
            </p>
            <p>
              <span className="font-bold">Acidité :</span> {vin.acidity}
            </p>
            <p>
              <span className="font-bold">Tanin :</span> {vin.tanin}
            </p>
            <p>
              <span className="font-bold">Alcool :</span> {vin.alcohol}
            </p>
          </div>
          <div className="text-[1.1rem] pl-[0.8rem] flex flex-col justify-center">
            <h3 className="text-[1.3rem] text-center pb-[0.4rem]">
              Familles aromatiques
            </h3>
            <p>
              <span className="font-bold">Fruits :</span> {vin.mouthFruits}
            </p>
            <p>
              <span className="font-bold">Fleurs :</span> {vin.mouthFlowers}
            </p>
            <p>
              <span className="font-bold">Végétal :</span> {vin.mouthPlants}
            </p>
            <p>
              <span className="font-bold">Épice :</span> {vin.mouthSpices}
            </p>
            <p>
              <span className="font-bold">Ampyreumatique :</span>{" "}
              {vin.mouthAmpyreumatique}
            </p>
            <p>
              <span className="font-bold">Minéral :</span> {vin.mouthMineral}
            </p>
          </div>
        </div>
        <div className="flex justify-around pb-[4rem]">
          <Link to="/profil">
            <button type="button" className="items-center">
              Retour profil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompteRenduVin;
