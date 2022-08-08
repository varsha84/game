import React, {useRef,  useState, useEffect } from "react";
import "./App.css";
import BlockComponent from "./BlockComonent";

const speedOfFallingBlock = 2000;

function App() {
  const speedOfNewBlock = 2000;
  const [letterA, setLetterA] = useState([]);
  const [letterB, setLetterB] = useState([]);
  const [letterC, setLetterC] = useState([]);
  const [letterD, setLetterD] = useState([]);
  const [letterE, setLetterE] = useState([]);
  const [pavilionList, setPavilionList] = useState([]);
  
  
  let myInterval = null;
  const alphabet = "a";
  const letter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

  function handleKeyDown(e) {

    console.log(e.keyCode);
    if ((e.keyCode === 65) && (letterA.length > 1)){
        setLetterA([]);
    } else if ((e.keyCode === 66) && (letterB.length > 1)){
      setLetterB([]);
    } else if ((e.keyCode === 67) && (letterC.length > 1)){
      setLetterC([]);
    } else if ((e.keyCode === 68) && (letterD.length > 1)){
      setLetterD([]);
    } else if ((e.keyCode === 69) && (letterE.length > 1)){
      setLetterE([]);
    }
  }
  
  

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const startTopPos =Math.floor(Math.random() * (450));
      const el = <BlockComponent letter={letter} startTopPos={startTopPos}/> ;
      //console.log(el);
      //console.log(el.props.getTop(startTopPos));

      if (letter === "A") {
        setLetterA([...letterA, el]);
      } else if (letter === "B") {
        setLetterB([...letterB, el]);
      } else if (letter === "C") {
        setLetterC([...letterC, el]);
      } else if (letter === "D") {
        setLetterD([...letterD, el]);
      } else if (letter === "E") {
        setLetterE([...letterE, el]);
      }
      
    }, speedOfNewBlock);

    document.addEventListener("keydown", handleKeyDown);

    const timer2 = window.setTimeout(()=>{
      let value = 0
      console.log(letterA);
      console.log("checking top");
      console.log(letterA[0]);
      
    },speedOfFallingBlock)
      

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
    

  }, [letterA, letterB, letterC, letterD, letterE]);

  

  return (
    <div className="game-containter">
      <div>
        <div className="play-ground" id="playarea">
          {letterA}
          {letterB}
          {letterC}
          {letterD}
          {letterE}
        </div>
        <div className="pavilion">{pavilionList}</div>
        {/* <button onClick={handleStartGame}>Start</button>
        <button onClick={handleStopGame}>Stop</button> */}
      </div>
      <div className="score"></div>
    </div>
  );
}



export default App;
