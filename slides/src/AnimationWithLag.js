import React, { useEffect, useState } from "react";

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
      src="https://picsum.photos/id/1/200/200"
      alt="rotation example"
    />
  );
};
