import { NavLink } from 'react-router-dom';

//pasek nawigacyjny widoczny na wszystkich stronach
//Używamy NavLink jako zamiennika do Link. Ma on specjalne zachowanie: gdy dodamy klasę to klasa ta przyjmuje funkcję która powinna zwrócić nazwę klasy która powinna byc dodana. Funkcja ta automatycznie otrzymuje obiekt z którego możemy destrukturyzować właściwość isActive który jest dostarczany przez Router i ma wartość boolean. Dodajemy też wlaściwość end do jednego z linków aby wskazać który jest aktywny.
export default function MainNavigation() {
	return (
		<header className='header'>
			<nav>
				<ul className='list'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? 'active' : '')}
							end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/products'
							className={({ isActive }) => (isActive ? 'active' : '')}>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
