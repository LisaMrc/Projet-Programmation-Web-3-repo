import "./MealCard.css";
import { Link } from "react-router-dom";

export default function MealCard({ idMeal, strMeal, strArea, strMealThumb }) {
  return (
    <div id="meal-card">
    <Link to={`/meal/${idMeal}`} className="meal-card">
      <img id="meal-picture" src={strMealThumb} alt={strMeal} />
      <div id="meal-description">
        <h3>{strMeal}</h3>
        <p>{strArea}</p>
      </div>
    </Link>
    </div>
  );
}