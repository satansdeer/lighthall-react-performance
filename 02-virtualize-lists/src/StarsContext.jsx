import { createContext, useState, useCallback, useContext } from "react";

const StarsStateContext = createContext();
const ToggleStarsContext = createContext();

export const StarsProvider = ({ children }) => {
	const [showStars, setShowStars] = useState(false);

	const toggleStars = useCallback(
		() => setShowStars((oldShowStars) => !oldShowStars),
		[]
	);

	return (
		<StarsStateContext.Provider value={{ showStars }}>
			<ToggleStarsContext.Provider value={{ toggleStars }}>
				{children}
			</ToggleStarsContext.Provider>
		</StarsStateContext.Provider>
	);
};

export const useStarsState = () => useContext(StarsStateContext);
export const useStarsToggle = () => useContext(ToggleStarsContext);
