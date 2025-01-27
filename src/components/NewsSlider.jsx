import { useState } from "react";
import newsData from "../newsData.js";

export default function NewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const selectNext = () => {
    if (currentIndex < newsData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <h2>Dog Center News</h2>
      <div
        style={{
          backgroundImage: `url(${newsData[currentIndex].pictureUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          color: "grey",
        }}
      >
        <h3>{newsData[currentIndex].title}</h3>
        <p>{newsData[currentIndex].content}</p>
      </div>

      <div>
        <button onClick={selectPrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={selectNext}
          disabled={currentIndex === newsData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}