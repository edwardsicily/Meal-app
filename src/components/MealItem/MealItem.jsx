import React, { useState } from "react";
import { MdStarOutline, MdStar } from "react-icons/md";
import { useGlobalContext } from "../../Context";
import { isMatch } from "../../utils";
import "../meal.css";

function MealItem({ item }) {
  const { selectMeal, addToFavourites, removeFromFavourites } =
    useGlobalContext();
  const [liked, setLiked] = useState(isMatch(item.idMeal));
  const handleLike = () => {
    liked ? removeFromFavourites(item?.idMeal) : addToFavourites(item?.idMeal);
    setLiked((like) => !like);
  };
  return (
    <div className="card">
      <img
        className="card-img"
        src={item?.strMealThumb}
        alt="meal-img"
        onClick={() => selectMeal(item?.idMeal)}
      />
      <div className="card-info">
        <p>{item?.strMeal}</p>
        <button className="card-btn" onClick={() => handleLike()}>
          {liked ? <MdStar /> : <MdStarOutline />}
        </button>
      </div>
    </div>
  );
}

export default MealItem;
