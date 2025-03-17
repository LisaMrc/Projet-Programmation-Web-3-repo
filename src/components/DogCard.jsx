import './DogCard.css'

export default function DogCard
({ 
    name,
    age,
    breed,
    pictureUrl,
    soundUrl
})

{
  const audio = new Audio(soundUrl)

  const playDogSound = () => 
    {
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
          breed && 
          <p className="dog-description-line">Age: {breed} years</p> 
        }
        <p className="dog-description-line">Breed: {breed}</p>
      </div>
    </div>
  );
};