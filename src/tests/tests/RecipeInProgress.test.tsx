// import userEvent from '@testing-library/user-event';
// import { screen, waitFor } from '@testing-library/react';
// import { vi } from 'vitest';
// import App from '../../App';
// import { renderWithRouter } from './renderWith';
// import { RecipeProvider } from '../../context/search-results-context';

// describe('Testes da página de detalhes de receita de meals para receita não encontrar:', async () => {
//   test(' testando meal in progress para receita não encontrada', async () => {
//     renderWithRouter(<RecipeProvider><App /></RecipeProvider>, { route: '/meals/529777/in-progress' });
//     const spy = vi.spyOn(window, 'alert').mockImplementation(() => {});
//     expect(spy).toHaveBeenCalledWith('Erro ao buscar detalhes da receita:');
//     await waitFor(() => {
//     });
//     spy.mockRestore();
// });
// });
