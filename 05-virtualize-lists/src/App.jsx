import AutoSizer from "react-virtualized-auto-sizer";
import { useStarsToggle } from "./StarsContext";
import { Card } from "./Card";
import { FixedSizeGrid as Grid } from "react-window";
import { COLUMNS } from "./constants";
import pseudoword from "pseudoword";

const animals = Array.from({ length: 2000 }, (v, k) => ({
	name: pseudoword(5),
}));

function App() {
	const { toggleStars } = useStarsToggle();

	return (
		<>
			<button onClick={toggleStars}>Toggle Stars</button>
			<AutoSizer>
				{({ width, height }) => {
					const columnWidth = width / COLUMNS;

					return (
						<Grid
							itemData={animals}
							rowCount={Math.ceil(animals.length / COLUMNS)}
							columnCount={COLUMNS}
							columnWidth={columnWidth}
							rowHeight={columnWidth * 1.4}
							height={height}
							width={width}
						>
							{Card}
						</Grid>
					);
				}}
			</AutoSizer>
		</>
	);
}

export default App;
