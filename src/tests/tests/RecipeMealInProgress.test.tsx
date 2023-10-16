import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes da página /DRINKS:', async () => {
  test(' testando drinks in progress', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals/52977/in-progress' });

    await waitFor(() => {
      screen.getByRole('img', {
        name: /corba/i,
      });
    }, { timeout: 3000 });
    const shareBtn = screen.getByRole('img', {
      name: /share/i,
    });
    const favBtn = screen.getByRole('button', {
      name: /favorite/i,
    });
    await userEvent.click(shareBtn);
    await userEvent.click(favBtn);
  });
  test(' testando checkbox de Meal em relação ao localStorage', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals/52977/in-progress' });
    await waitFor(() => {
      const checkboxLentils = screen.getByTestId('0-ingredient-step');
      expect(checkboxLentils).toBeInTheDocument();

      userEvent.click(checkboxLentils);
      // const ingredientGallianoLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      // expect(ingredientGallianoLocalStorage.).toBeInTheDocument();
    }, { timeout: 5000 });
    // localStorage.removeItem('inProgressRecipes');
  });
});
