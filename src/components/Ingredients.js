import React from 'react';
import { useLocation } from 'react-router-dom';

const Ingredients = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) {
    return <div>No recipe data available</div>;
  }

  return (
    <div className='section ingredients'>
       <div className='col image'>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      </div>
      <div className='col typography'>
      <h1 className="title">{recipe.recipe.label}</h1>
      <div className='info'>
      <p><b className='cuisine-title'>Cuisine type:</b>{recipe.recipe.cuisineType}</p>
      <p><b className='cuisine-title'>Meal type:</b> {recipe.recipe.mealType}</p>
      <h2 className='title'>Ingredients:</h2>
      <ul>
        {recipe.recipe.ingredientLines.map((ingredient, index) => (
          <p key={index} className='skill-item'>{ingredient}</p>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Ingredients;
