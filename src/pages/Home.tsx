import { Link, useNavigate } from 'react-router-dom';

//Używamy NavLink jako zamiennika do Link. Ma on specjalne zachowanie: gdy dodamy klasę to klasa ta przyjmuje funkcję która powinna zwrócić nazwę klasy która powinna byc dodana. Funkcja ta automatycznie otrzymuje obiekt z którego możemy destrukturyzować właściwość isActive który jest dostarczany przez Router i ma wartość boolean. Dodajemy też wlaściwość end do jednego z linków aby wskazać który jest aktywny.
export default function Home() {
	const navigate = useNavigate();

	function navigateHandler() {
		navigate('/products');
	}

	return (
		<>
			<h1>My Home Page</h1>
			<p>
				Go to <Link to='/products'>the list of products</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>Navigate</button>
			</p>
		</>
	);
}
