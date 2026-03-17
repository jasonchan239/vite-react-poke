import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PokemonProvider from './context/PokemonContext';

import './index.css';
import { Home, PokemonDetails } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/:pokemonId',
		element: <PokemonDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<PokemonProvider>
		<RouterProvider router={router} />
	</PokemonProvider>
);