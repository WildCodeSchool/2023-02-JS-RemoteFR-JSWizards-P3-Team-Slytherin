import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

export default function Stars({ name }) {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <StarRatings
        rating={rating}
        starRatedColor="#e4c467"
        changeRating={changeRating}
        numberOfStars={5}
        name={name}
        starDimension="32px"
        starSpacing="4px"
      />{" "}
    </>
  );
}

Stars.propTypes = {
  name: PropTypes.string.isRequired,
};
