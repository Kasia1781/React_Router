import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

//https://example.com - to jest domena
//https://example.com/products - to jest ścieżka
//https://example.com/ - to też jest ścieżka

const router = createBrowserRouter([
	{ path: '/', element: <Home /> }, //ścieżka dla strony głównej
	{},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
