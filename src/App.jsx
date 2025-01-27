import './App.css';
import dogsData from './dogsData';
import DogCard from './components/DogCard';
import newsData from './newsData';
import NewsSlider from './components/NewsSlider';

export default function App() {
  return (
    <div>
        <NewsSlider
            title={newsData.title}
        />
      <h1>Dog Center</h1>
      <div id="dog-gallery">
        { dogsData.map((dog) => (
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