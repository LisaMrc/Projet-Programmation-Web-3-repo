/* App.jsx */
import "./DogCard.css";

export default function DogCard({ name, age, breed, pictureUrl }) {
  return (
    <div id="dog-card">
      <img
        id="dog-picture"
        src={pictureUrl}
        alt="Dog"
      />
      <div id="dog-description">
        <h3>{name}</h3>
        <p className="dog-description-line">Age: {age} years</p>
        <p className="dog-description-line">Breed: {breed}</p>
      </div>
    </div>
  );
};