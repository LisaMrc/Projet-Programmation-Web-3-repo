import DogCard from './components/DogCard';
import './App.css'

export default function App() {
  return (
    <div>
      <h1>Dog Center</h1>
      <div id="dog-gallery">
        <DogCard 
          name="Rex"
          age={3}
          breed="Golden Retriever"
          pictureUrl="https://cdn.pixabay.com/photo/2022/03/09/20/08/golden-retriever-7058634_1280.jpg"
        />
        <DogCard 
          name="Luna"
          age={2}
          breed="Labrador Retriever"
          pictureUrl="https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_640.jpg"
        />
        <DogCard 
          name="Buddy"
          age={5}
          breed="Golden Retriever"
          pictureUrl="https://cdn.pixabay.com/photo/2023/11/30/15/49/dog-8421955_640.jpg"
        />
        <DogCard 
          name="Ciboulette"
          age={undefined}
          breed="Bernese Mountain Dog"
          pictureUrl="https://media.istockphoto.com/id/184137526/fr/photo/chien-sur-lherbe.jpg?s=1024x1024&w=is&k=20&c=eygQDTdV2gvZ-814rajQWIgqMlJd-nSlBhEeE-cQSd8="
        />
      </div>
    </div>
  );
}