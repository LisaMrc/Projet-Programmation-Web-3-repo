import { useState, useEffect } from "react";
import MealsData from "../data/MealsData";
import MealCard from "../components/MealCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const favoriteMeals = MealsData.filter((meal) =>
    favoriteIds.includes(meal.idMeal)
  );

  const toggleFavorite = (id) => {
    const updated = favoriteIds.includes(id)
      ? favoriteIds.filter((favId) => favId !== id)
      : [...favoriteIds, id];

    setFavoriteIds(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="centered">
      <Navbar />
      <h1>Your Favorites</h1>
      <div id="meal-gallery">
        {favoriteMeals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strArea={meal.strArea}
            strMealThumb={meal.strMealThumb}
            isFavorite={true}
            onToggleFavorite={() => toggleFavorite(meal.idMeal)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}