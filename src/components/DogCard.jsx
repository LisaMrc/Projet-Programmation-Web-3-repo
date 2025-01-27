import './DogCard.css'

export default function DogCard({ 
    name,
    age,
    breed,
    pictureUrl,
    soundUrl
  }) {
  const audio = new Audio(soundUrl)

  const playDogSound = () => {
    audio.currentTime = 0
    audio.play()
  }

  return (
    <div id="dog-card">
      <img
        id="dog-picture"
        src={pictureUrl}
        alt="Dog"
      />
      <div id="dog-description">
        <h3>{name}</h3>
        { 
          age && 
          <p className="dog-description-line">Age: {age} years</p> 
        }
        <p className="dog-description-line">Breed: {breed}</p>
        <button onClick={playDogSound}>Listen</button>
      </div>
    </div>
  );
};