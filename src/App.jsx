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
    localStorage.getItem("search") || "age"
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
      if (dogsSortBy === "age") {
        // age can be null
        return (a.age || 0) - (b.age || 0);
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
        <label htmlFor="dog-sort">Sort by : </label>
        <select
          id="dog-sort"
          value={dogsSortBy}
          onChange={(e) => setDogsSortBy(e.target.value)}
        >
          <option value="age">Age</option>
          <option value="name">Name</option>
        </select>

        <label htmlFor="dog-sort">Sort by : </label>
        <select
          id="dog-sort"
          value={dogsSortBy}
          onChange={(e) => setDogsSortBy(e.target.value)}
        >
          <option value="age">Age</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div id="dog-gallery">
        {filteredDogsData.map((dog) => (
          <DogCard
            key={dog.id}
            name={dog.name}
            age={dog.age}
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
