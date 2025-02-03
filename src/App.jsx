import "./App.css";
import { useState, useMemo, useEffect} from "react";
import dogsData from "./dogsData";
import NewsSlider from "./components/NewsSlider";
import DogCard from "./components/DogCard";
import Navbar from "./components/Navbar";

export default function App() {
  const [search, setSearch] = useState(
    localStorage.getItem("search") || ""
  );

  const [dogsSortBy, setDogsSortBy] = useState(
    localStorage.getItem("search") || "age"
  );

  useEffect(() => {
    localStorage.setItem("search", search)
  }, [search])

  useEffect(() => {
    localStorage.setItem("dogsSortBy", dogsSortBy)
  }, [dogsSortBy])

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
      <NewsSlider />
      <div id="gallery-options">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search dog"
        />
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
    </div>
  );
}