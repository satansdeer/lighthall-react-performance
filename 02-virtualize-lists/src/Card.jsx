import { Container, Name, Prime, Star } from "./Card.styles";
import { COLUMNS } from "./constants";
import avatar from "animal-avatar-generator";
import { calculatePrimes } from "./calculatePrimes";
import { useStarsState } from "./StarsContext";

const GUTTER = 20;

export const Card = ({ data, style, columnIndex, rowIndex }) => {
	const item = data[rowIndex * COLUMNS + columnIndex];

	const { showStars } = useStarsState();

	const primes = calculatePrimes(10, 1000000000).join(", ");

	return (
		<div
			style={{
				...style,
				left: style.left + GUTTER / 2,
				width: style.width - GUTTER,
			}}
		>
			<Container>
				{showStars && <Star>⭐️</Star>}
				<div
					dangerouslySetInnerHTML={{
						__html: avatar(`${rowIndex}-${columnIndex}`, { size: 100 }),
					}}
				/>
				<Name>{item.name}</Name>
				<Prime>{primes}</Prime>
			</Container>
		</div>
	);
};
