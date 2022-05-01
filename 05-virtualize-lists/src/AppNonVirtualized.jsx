import { Card } from "./CardNonVirtualized";
import { useStarsToggle } from "./StarsContext";
import pseudoword from "pseudoword";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	gap: 10px;
	padding-left: 20px;
`;

const animals = Array.from({ length: 2000 }, (v, k) => ({
	name: pseudoword(5),
	id: Date.now(),
}));

function App() {
	const { toggleStars } = useStarsToggle();

	return (
		<>
			<button onClick={toggleStars}>Toggle Stars</button>
			<Container>
				{animals.map((item, index) => (
					<Card key={item.id} index={index} item={item} />
				))}
			</Container>
		</>
	);
}

export default App;
