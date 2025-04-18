import "./Display.css";
import { useParams } from "react-router-dom";
import MealsData from "../data/MealsData";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Display() {
  const { id } = useParams();
  const meal = MealsData.find((m) => m.idMeal === id);

  if (!meal) return <p>Meal not found</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure?.trim() || ""} ${ingredient.trim()}`);
    }
  }

  return (
    <div>
        <Navbar />
      <div className="meal-container">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="meal-image"
        />
        <h1 className="meal-title">{meal.strMeal}</h1>

        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <p className="meal-instructions">{meal.strInstructions}</p>
      </div>

      <Footer />
    </div>
  );
}
