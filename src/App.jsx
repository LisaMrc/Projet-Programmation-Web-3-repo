import "./App.css";
import { useState, useMemo, useEffect } from "react";
import MealsData from "./data/MealsData";
import NewsSlider from "./components/NewsSlider";
import MealCard from "./components/MealCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState("");
  const [mealsSortBy, setMealsSortBy] = useState("idMeal");

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("mealsSortBy", mealsSortBy);
  }, [mealsSortBy]);

  const filteredMealsData = useMemo(() => {
    return MealsData.filter((meal) =>
      meal.strMeal.toLowerCase().includes(search.toLowerCase())
    )
      .slice()
      .sort((a, b) => {
        if (mealsSortBy === "idMeal") {
          return (a.idMeal || 0) - (b.idMeal || 0); // Sort by ID (ascending)
        } else if (mealsSortBy === "strMeal") {
          return a.strMeal.localeCompare(b.strMeal); // Sort alphabetically
        }
        return 0;
      });
  }, [search, mealsSortBy]);
  return (
    <div>
      <Navbar />
      <Header />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a meal..."
      />

      <div id="gallery-options">
        <select
          id="meal-sort"
          value={mealsSortBy}
          onChange={(e) => setMealsSortBy(e.target.value)}
        >
          <option value="idMeal">Sort by latest</option>
          <option value="strMeal">Sort by name</option>
        </select>
      </div>

      <div id="meal-gallery">
        {filteredMealsData.map((meal) => (
          <MealCard
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMeal={meal.strMeal}
            strArea={meal.strArea}
            strMealThumb={meal.strMealThumb}
          />
        ))}
      </div>

      <NewsSlider />
      <Footer />
    </div>
  );
}
