import React from "react";
import { useGlobalContext } from "../../../Context";
import { FaTrash } from "react-icons/fa";
import "../favourites.css";

function FavouriteItem({ item }) {
  const { selectMeal, removeFromFavourites } = useGlobalContext();
  const { idMeal, strMealThumb, strMeal } = item;
  return (
    <div className="favourite-item">
      <img src={strMealThumb} className="favourite-image" alt="" />
      <div className="options">
        <h4 onClick={() => selectMeal(idMeal)}>{strMeal}</h4>
        <button
          className="remove-fav-btn"
          onClick={() => removeFromFavourites(idMeal)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default FavouriteItem;
