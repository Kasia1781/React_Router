import { useParams } from 'react-router-dom';

//Używamy hook useParams który daje nam obiekt który zawiera dynamiczny segment ścieżki zdefiniowanej w korzeniu jako właściwość.
export default function ProductDetail() {
	const params = useParams();
	console.log(params);

	return (
		<>
			<h1>Product Details!</h1>
			<p>{params.productId}</p>
		</>
	);
}
