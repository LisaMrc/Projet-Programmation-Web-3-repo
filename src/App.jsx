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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // Load unique categories, areas, and ingredients ONCE when the component mounts
  useEffect(() => {
    setCategories([...new Set(MealsData.map((meal) => meal.strCategory))]);
    setAreas([...new Set(MealsData.map((meal) => meal.strArea))]);

    // Extract unique ingredients
    const allIngredients = new Set();
    MealsData.forEach((meal) => {
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]?.trim();
        if (ingredient) allIngredients.add(ingredient);
      }
    });
    setIngredients([...allIngredients].sort());
  }, []);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle area selection
  const handleAreaChange = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  // Handle ingredient selection
  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  // Filter and sort meals
  const filteredMealsData = useMemo(() => {
    return MealsData.filter((meal) => {
      // Extract meal ingredients
      const mealIngredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          mealIngredients.push(meal[`strIngredient${i}`].trim());
        }
      }

      return (
        meal.strMeal.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategories.length === 0 ||
          selectedCategories.includes(meal.strCategory)) &&
        (selectedAreas.length === 0 || selectedAreas.includes(meal.strArea)) &&
        (selectedIngredients.length === 0 ||
          selectedIngredients.every((ing) => mealIngredients.includes(ing)))
      );
    })
      .slice()
      .sort((a, b) =>
        mealsSortBy === "idMeal"
          ? (a.idMeal || 0) - (b.idMeal || 0)
          : a.strMeal.localeCompare(b.strMeal)
      );
  }, [
    search,
    mealsSortBy,
    selectedCategories,
    selectedAreas,
    selectedIngredients,
  ]);

  return (
    <div>
      <Navbar />
      <Header />

      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a meal..."
      />

      {/* Sorting Dropdown */}
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

      {/* Category Filter Dropdown */}
      <div className="category-dropdown">
        <button className="dropdown-button">Category ▼</button>
        <div className="dropdown-content">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Area Filter Dropdown */}
      <div className="area-dropdown">
        <button className="dropdown-button">Area ▼</button>
        <div className="dropdown-content">
          {areas.map((area) => (
            <label key={area}>
              <input
                type="checkbox"
                checked={selectedAreas.includes(area)}
                onChange={() => handleAreaChange(area)}
              />
              {area}
            </label>
          ))}
        </div>
      </div>

      {/* Ingredients Filter Dropdown */}
<div className="ingredient-dropdown">
  <button className="dropdown-button">Ingredients ▼</button>
  <div className="dropdown-content ingredient-grid">
    {ingredients.map((ingredient) => (
      <label key={ingredient} className="ingredient-item">
        <input type="checkbox" checked={selectedIngredients.includes(ingredient)} onChange={() => handleIngredientChange(ingredient)} />
        {ingredient}
      </label>
    ))}
  </div>
</div>

      {/* Meal Gallery */}
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