import React from 'react';
import { useNavigate } from 'react-router-dom';
import Customimage from './Customimage';

const RecipeCard = ({ recipe, im }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recipes/ingredients', { state: { recipe } });
  };

  return (
    <div className='recipe-card'>
      <Customimage imgsrc={recipe.recipe.image} pt='65%' />
      <div className='recipe-card-info'>
        <img className='auther-img' src={im} alt='' />
        <p className='recipe-title'>{recipe.recipe.label}</p>
        <p className='recipe-desc'>Cuisine type: {recipe.recipe.cuisineType}</p>
        <p className='recipe-desc'>Meal type: {recipe.recipe.mealType}</p>
        <button onClick={handleClick} className='view-btn'>
          VIEW RECIPE
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
