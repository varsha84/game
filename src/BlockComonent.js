import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const BlockComponent = ({ letter}) => {
  const speedOfFallingBlock = 2000;
  const playarea_width = 500;
  const playarea_height = 500;
  const colors = ["#ff0000", "#00ff00", "#0000ff"];
  const sizes = [30, 40, 50];

  const [bgColor, setBgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
  const [boxSize, setBoxSize] = useState(sizes[Math.floor(Math.random() * sizes.length)]);
  const [left, setLeft] = useState(Math.floor(Math.random() * (playarea_width - boxSize)))
  const [top, setTop] = useState(Math.floor(Math.random() * (playarea_height - boxSize)))
  //const [top, setTop] = useState(topPos)
  const fontSize = boxSize - 10; // font size must be 10 px less than box size
  const [moveOut, setMoveOut] = useState(false)

  useEffect(()=>{
    const timer = window.setTimeout(() => { 
      if (top + boxSize < playarea_height){
        const newTop = top + 10;
        setTop(newTop);
      }
      else{
        setTop(playarea_height)
        setMoveOut(true)
      }      
    }, 2000)
    
    return () => {  window.clearTimeout(timer);};
  },[top])
  
  return (
    <div
      style={{
        width: `${boxSize}` +"px",
        height: `${boxSize}` +"px",
        "background-color": `${bgColor}`,
        left: `${left}` +"px",
        top: `${top}`+"px",
        position: "absolute",
        "text-align": "center",
        "font-size": `${fontSize}`+"px",
      }}
    >
      {letter}
    </div>
  );
};
BlockComponent.propTypes = {
  letter: PropTypes.string.isRequired,
  getMoveOut: PropTypes.func,
};

BlockComponent.defaultProps = {
  letter: "A",  
  getMoveOut: (value) => value,
};
export default BlockComponent;