import './MealCard.css'

export default function MealCard
({ 
    idMeal,
    strMeal,
    strArea,
    strMealThumb,
})

{
  return (
    <div id="meal-card">
      <img
        id="meal-picture"
        src={strMealThumb}
        alt={strMeal}
      />
      <div id="meal-description">
        <h3>{strMeal}</h3>
        <p className="dog-description-line">{strArea}</p>
      </div>
    </div>
  );
};