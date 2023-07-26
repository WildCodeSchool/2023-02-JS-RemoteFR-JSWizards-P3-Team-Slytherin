import StarRatings from "react-star-ratings";
import { useState } from "react";
import { useUser } from "@contexts/UserContext";
import { useChoice } from "@contexts/ChoiceContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Avis() {
  const navigate = useNavigate();
  const { loggedInUser } = useUser();
  const { selection } = useChoice();

  const [accueilRating, setAccueilRating] = useState(0);
  const [learnRating, setLearnRating] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [commentaire, setCommentaire] = useState("");

  const changeAccueilRating = (newRating) => {
    setAccueilRating(newRating);
  };

  const changeLearnRating = (newRating) => {
    setLearnRating(newRating);
  };

  const changeExperienceRating = (newRating) => {
    setExperienceRating(newRating);
  };

  const changeCommentaire = (e) => {
    setCommentaire(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/avis/${loggedInUser.id}/${
          selection[0].id
        }`,
        {
          note1: accueilRating,
          note2: learnRating,
          note3: experienceRating,
          comment: commentaire,
        }
      );
    } catch (error) {
      console.error(error);
    }

    navigate("/profil");
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 pt-4">
      <h2 className="text-3xl">Votre avis nous intéresse</h2>
      <form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-col gap-4 pt-4"
      >
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              Accueil lors de l'atelier ?
            </p>
            <StarRatings
              rating={accueilRating}
              starRatedColor="#e4c467"
              changeRating={changeAccueilRating}
              numberOfStars={5}
              name="accueil"
              starDimension="32px"
              starSpacing="4px"
            />{" "}
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              J'ai appris des choses ?
            </p>
            <StarRatings
              rating={learnRating}
              starRatedColor="#e4c467"
              changeRating={changeLearnRating}
              numberOfStars={5}
              name="learn"
              starDimension="32px"
              starSpacing="4px"
            />{" "}
          </li>
          <li className="flex justify-between items-center flex-nowrap">
            <p className="text-sm max-w-[40%] md:max-w-[380px] lg:max-w-[640px] md:text-lg">
              Je recommande l'expérience ?
            </p>
            <StarRatings
              rating={experienceRating}
              starRatedColor="#e4c467"
              changeRating={changeExperienceRating}
              numberOfStars={5}
              name="experience"
              starDimension="32px"
              starSpacing="4px"
            />{" "}
          </li>
        </ul>
        <span className="w-full bg-secondary h-[1px] self-center my-2" />
        <label className="text-sm md:text-lg" htmlFor="commentaire">
          Avez-vous un commentaire ou des suggestions à nous laisser ?
        </label>
        <textarea
          onChange={changeCommentaire}
          className="p-2 text-primary rounded"
          name="commentaire"
          id="commentaire"
          placeholder="J'ai trouvé cet atelier génial, si j'avais une suggestion ce serait de..."
          cols="30"
          rows="5"
        />
        <div className="w-full flex justify-center pt-4 mb-4">
          <button type="submit">Envoyer votre avis</button>
        </div>
      </form>
    </div>
  );
}
