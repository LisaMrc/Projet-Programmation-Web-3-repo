import { useState, useMemo, useEffect } from "react";

import "./App.css";

import dogsData from "./data/dogsData";
import NewsSlider from "./components/NewsSlider";
import DogCard from "./components/DogCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [search, setSearch] = useState(localStorage.getItem("search") || "");

  const [dogsSortBy, setDogsSortBy] = useState(
    localStorage.getItem("search") || "id"
  );

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("dogsSortBy", dogsSortBy);
  }, [dogsSortBy]);

  const filteredDogsData = useMemo(() => {
    let result = dogsData.filter((dog) =>
      dog.name.toLowerCase().includes(search.toLowerCase())
    );
    result = result.toSorted((a, b) => {
      if (dogsSortBy === "id") {
        // age can be null
        return (a.id || 0) - (b.id || 0);
      } else {
        // sort in alphabetical order
        return a.name.localeCompare(b.name);
      }
    });
    return result;
  }, [dogsData, search, dogsSortBy]);

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
          id="dog-sort"
          value={dogsSortBy}
          onChange={(e) => setDogsSortBy(e.target.value)}
        >
          <option value="id">Sort by latest</option>
          <option value="name">Sort by </option>
        </select>
      </div>

      <div id="dog-gallery">
        {filteredDogsData.map((dog) => (
          <DogCard
            key={dog.id}
            name={dog.name}
            breed={dog.breed}
            pictureUrl={dog.pictureUrl}
            soundUrl={dog.soundUrl}
          />
        ))}
      </div>

      <NewsSlider />
      <Footer />
    </div>
  );
}
