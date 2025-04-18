import "./MealCard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MealCard({
  idMeal,
  strMeal,
  strMealThumb,
  strArea,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div id="meal-card">
      <Link to={`/meal/${idMeal}`} className="meal-card">
        <img id="meal-picture" src={strMealThumb} alt={strMeal} />
        <div id="meal-description">
          <h3>{strMeal}</h3>
          <p>{strArea}</p>
        </div>
      </Link>
      <button
        className={`heart-button ${isFavorite ? "favorited" : ""}`}
        onClick={() => onToggleFavorite(idMeal)}
      >
        Favorite ♡
      </button>
    </div>
  );
}
