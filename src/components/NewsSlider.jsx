import { useState } from "react";
import newsData from "../data/newsData.js";
import "./NewsSlider.css";

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
    <article>
      <h3>Latest news</h3>
      <div
        style={{
          padding: "20px",
          color: "black",
          borderRadius: "20px",
          width:"40%",
          height:"20vh",
          backgroundColor:"#f3f4f6",
        }}
      >
        <h4>{newsData[currentIndex].title}</h4>
        <p>{newsData[currentIndex].content}</p>
      </div>

      <div>
        <button onClick={selectPrevious} disabled={currentIndex === 0} className="button-red-inline">Previous</button>
        <button onClick={selectNext} disabled={currentIndex === newsData.length - 1} className="button-red-inline">Next</button>
      </div>
    </article>
  );
}