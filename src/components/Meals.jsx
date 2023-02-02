import React from "react";
import { useGlobalContext } from "../Context";

import MealItem from "./MealItem/MealItem";
import "./meal.css";

function Meals() {
  const { meals, loading, searchString, selectMeal, addToFavourites } =
    useGlobalContext();

  if (loading) {
    return (
      <div className="meals-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  if (meals.length < 1) {
    return (
      <div className="meals-section">
        <div className="no-results">No results found for {searchString}</div>
      </div>
    );
  }
  return (
    <section className="meals-section">
      <h2>Recipes</h2>
      <div className="found-results">
        {!searchString
          ? ""
          : `${meals.length} result found for ${searchString}`}
      </div>
      <div className="card-container">
        {meals.map((item, idx) => {
          // console.log(item.strMeal);
          return <MealItem key={idx} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Meals;
