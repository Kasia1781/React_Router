import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './pages/ProductDetail';

//https://example.com - to jest domena
//https://example.com/products - to jest ścieżka
//https://example.com/ - to też jest ścieżka

//zmiana ścieżek z absolutnych na relatywne
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '', element: <Home /> }, //ścieżka dla strony głównej
			{ path: 'products', element: <Products /> },
			{ path: 'products/:productId', element: <ProductDetail /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
