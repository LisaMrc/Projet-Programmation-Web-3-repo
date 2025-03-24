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


  useEffect(() => {
    const newMealData = []


    setMealData(newMealData)
    setCategories([...new Set(newMealData.map((meal) => meal.strCategory))])
  }, [])

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("mealsSortBy", mealsSortBy);
  }, [mealsSortBy]);

  const categories = [...new Set(MealsData.map((meal) => meal.strCategory))];
  const areas = [...new Set(MealsData.map((meal) => meal.strArea))];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleAreaChange = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const filteredMealsData = useMemo(() => {
    return MealsData.filter(
      (meal) =>
        meal.strMeal.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategories.length === 0 || selectedCategories.includes(meal.strCategory)) &&
        (selectedAreas.length === 0 || selectedAreas.includes(meal.strArea))
    )
      .slice()
      .sort((a, b) => {
        if (mealsSortBy === "idMeal") {
          return (a.idMeal || 0) - (b.idMeal || 0);
        } else if (mealsSortBy === "strMeal") {
          return a.strMeal.localeCompare(b.strMeal);
        }
        return 0;
      });
  }, [search, mealsSortBy, selectedCategories, selectedAreas]);

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