import { Link } from 'react-router-dom';

//Używamy hook useParams który daje nam obiekt który zawiera dynamiczny segment ścieżki zdefiniowanej w korzeniu jako właściwość.
const PRODUCTS = [
	{ id: 'p1', title: 'Product 1' },
	{ id: 'p2', title: 'Product 2' },
	{ id: 'p3', title: 'Product 3' },
];

export default function Products() {
	return (
		<>
			<h1>The Products Page</h1>
			<ul>
				{PRODUCTS.map((product) => (
					<li key={product.id}>
						<Link to={`/products/${product.id}`}>{product.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
