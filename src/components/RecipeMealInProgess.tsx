import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMealsByIdRecipe } from '../api';
import { ReturnFetchMealsByIdRecipe } from '../typesCleidson';

function RecipeMealInProgress() {
  const { id } = useParams();
  console.log(id);
  const [recipeData, setRecipeData] = useState<ReturnFetchMealsByIdRecipe>();

  async function returnMealsAPI() {
    const mealsAPI = await fetchMealsByIdRecipe(id);
    // console.log(mealsAPI);
    const data = await mealsAPI.json();
    console.log(data);
    setRecipeData(data);
  }

  useEffect(() => {
    returnMealsAPI();
  }, []);

  console.log(recipeData);

  if (!recipeData) {
    return <div>Carregando...</div>;
  }

  const { meals } = recipeData;
  const [meal] = meals;
  const ingredientOfArray = Object.entries(meal);
  const mealsFilter = ingredientOfArray.filter((ingredient) => (
    ingredient[0].includes('strIngredient')
  )).filter((ingredient) => ingredient[1] !== '' && ingredient[1] !== null);
  console.log(mealsFilter);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
      <h1 data-testid="recipe-title">{ meal.strMeal }</h1>
      <p data-testid="recipe-category">{ meal.strCategory }</p>
      <h2>Ingredientes:</h2>
      <div>
        {mealsFilter.map((ingredient, index) => (
          <span key={ index }>
            <label
              htmlFor={ String(ingredient) }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                name={ String(ingredient) }
              />
              {ingredient[1]}
            </label>
          </span>
        ))}
      </div>
      <h2>Instruções:</h2>
      <p data-testid="instructions">{meal.strInstructions}</p>
      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default RecipeMealInProgress;