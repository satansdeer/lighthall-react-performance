import React, { useState } from "react";

export const ButtonWithDelay = (props) => {
  const [times, setTimes] = useState(0);

  const handleClick = () => {
		setTimeout(() => {
    	setTimes(times + 1);
		}, props.delay || 0);
  };

  return (
    <button
      style={{ fontSize: "20px" }}
      onClick={handleClick}
    >
      Clicked {times} times
    </button>
  );
};
