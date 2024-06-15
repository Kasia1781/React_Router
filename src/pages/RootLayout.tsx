// Dodajemy Layout który zawija wszystkie trasy i ładuje komponenty główne wewnątrz zawijającego komponentu. Dodajemy nową ścieżkę a jako element dodajemy wrapper który powinien byc zawinięty wokół innych tras.
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
	return (
		<>
			<MainNavigation />
			<main className='content'>
				<Outlet />
			</main>
		</>
	);
}
