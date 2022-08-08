import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function BlockComponent({ letter, startTopPos}) {
  //const contextValue = React.useContext(context);
  const speedOfFallingBlock = 2000;
   const playarea_width = 500;
  const playarea_height = 500;
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  const sizes = [30, 40, 50];
  const [bgColor, setBgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [boxSize, setBoxSize] = useState(sizes[Math.floor(Math.random() * sizes.length)]);
  const [left, setLeft] = useState( Math.floor(Math.random() * (playarea_width - boxSize)));
  //const [top, setTop] = useState(Math.floor(Math.random() * (playarea_height - boxSize)));
  const [top, setTop] = useState(startTopPos);
  const fontSize = boxSize - 10; // font size must be 10 px less than box size

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setTop(top + 10);
    }, speedOfFallingBlock);
    //console.log("top = " + top);
    return () => {
      window.clearTimeout(timer);
    };
  }, [top]); 
  

  return (
    <div
      style={{
        width: `${boxSize}` + "px",
        height: `${boxSize}` + "px",
        "background-color": `${bgColor}`,
        left: `${left}` + "px",
        top: `${top}` + "px",
        position: "absolute",
        "text-align": "center",
        "font-size": `${fontSize}` + "px",
      }}
    >
      {letter}
    </div>
  );
};

BlockComponent.propTypes = {
  getTop: PropTypes.func,
};

BlockComponent.defaultProps = {
  getTop: (top) => top,
}
