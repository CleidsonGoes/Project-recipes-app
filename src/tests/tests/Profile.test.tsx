import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouter } from './renderWith';
import { RecipeProvider } from '../../context/search-results-context';

describe('Testes da página PROFILE:', async () => {
  test('Verificando a existencia de elementos ná pagina Profile', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Done Recipes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Favorite Recipes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();
    const perfilIcon = screen.getByTestId('profile-top-btn');
    expect(perfilIcon).toBeInTheDocument();
  });

  test('Testando botão Done Recipe da página de Profile', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    const buttonDoneRecipes = screen.getByTestId('profile-done-btn');

    await userEvent.click(buttonDoneRecipes);
    const titleDoneRecipe = await screen.findByText(/Done Recipes/i);
    expect(titleDoneRecipe).toBeInTheDocument();
    const buttonVoltar = screen.getByTestId('profile-back-btn');
    await userEvent.click(buttonVoltar);
  });
  test('Fazendo login e buscando o email na tela do profile', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    await userEvent.type(emailInput, 'trybe@gmail.com');
    await userEvent.type(passwordInput, '123456abcdfg');
    await userEvent.click(loginButton);

    const profileButton = screen.getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
    await userEvent.click(profileButton);
  });

  test('Testando botão Favorite Recipe da página de Profile', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    const buttonFavoriteRecipes = screen.getByTestId('profile-favorite-btn');
    await userEvent.click(buttonFavoriteRecipes);

    const titleFavoriteRecipes = await screen.findByText(/Favorite Recipes/i);
    expect(titleFavoriteRecipes).toBeInTheDocument();

    const buttonVoltar = screen.getByTestId('profile-back-btn');
    await userEvent.click(buttonVoltar);
  });

  test('Testando botão Logout da página de Profile', async () => {
    renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/profile' });

    const buttonLogout = screen.getByTestId('profile-logout-btn');
    await userEvent.click(buttonLogout);
  });
});
