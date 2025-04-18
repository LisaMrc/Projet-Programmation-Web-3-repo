import MealsData from "../data/MealsData";
import MealCard from "../components/MealCard";

export default function Favorites() {
  const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
  const favoriteMeals = MealsData.filter((meal) =>
    favoriteIds.includes(meal.idMeal)
  );

  return (
    <div>
      <h2>Your Favorites</h2>
      <div id="meal-gallery">
        {favoriteMeals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strArea={meal.strArea}
            strMealThumb={meal.strMealThumb}
            isFavorite={true}
            onToggleFavorite={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
