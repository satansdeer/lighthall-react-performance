import { Container, Name, Prime, Star } from "./Card.styles";
import avatar from "animal-avatar-generator";
import { calculatePrimes } from "./calculatePrimes";
import { useStarsState } from "./StarsContext";

export const Card = ({ item }) => {
	const { showStars } = useStarsState();

	const primes = calculatePrimes(10, 1000000000).join(", ");

	return (
		<Container>
			{showStars && <Star>⭐️</Star>}
			<div
				dangerouslySetInnerHTML={{
					__html: avatar(`${item.name}`, { size: 100 }),
				}}
			/>
			<Name>{item.name}</Name>
			<Prime>{primes}</Prime>
		</Container>
	);
};
