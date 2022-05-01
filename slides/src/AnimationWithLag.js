import React, { useEffect, useState } from "react";
import slow from "./slow.png";
import fast from "./fast.png";

export const AnimationWithLag = (props) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(
        (oldAngle) =>
          (oldAngle + 360 / (1000 / props.interval) / 4) %
          360
      );
    }, props.interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      style={{ position: "absolute", transform: `rotate(${angle}deg)` }}
			width="300px"
      src={props.slow ? slow : fast}
      alt="rotation example"
    />
  );
};
