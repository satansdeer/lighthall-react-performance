import React, { useState } from "react";
import slow from "./slow.png";
import fast from "./fast.png";

export const LoadContentWithDelay = (props) => {
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setShowContent(true);
      setLoading(false);
    }, props.delay || 0);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!showContent) {
    return (
      <div>
        <a onClick={handleClick}>
          Show me the content in {Math.round(props.delay / 1000)} seconds
        </a>
      </div>
    );
  }

  return <img width="300px" src={props.slow ? slow : fast} />;
};
