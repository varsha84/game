
import React, { useState, useEffect } from "react";
import BlockComponent from './BlockComonent';

import "./App.css";

function App() {
  const speedOfNewBlock = 2000;
  const [playAreaList, setPlayAreaList] = useState([]);
  const [pavilionList, setPavilionList] = useState([]);
  const alphabet = "abcde";
  const letter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(); 

  
  function handleKeyDown(e) {
    console.log(e.keyCode);
    if(e.keyCode === 65){
      let newlist = playAreaList.filter( el => el.props.letter === "A")
      if (newlist.length > 1){
        setPlayAreaList(playAreaList.filter( el => el.props.letter !== "A"))
      }
    }
    if(e.keyCode === 66){
      let newlist = playAreaList.filter( el => el.props.letter === "B")
      if (newlist.length > 1){
        setPlayAreaList(playAreaList.filter( el => el.props.letter !== "B"))
      }
    }
    if(e.keyCode === 67){
      let newlist = playAreaList.filter( el => el.props.letter === "C")
      if (newlist.length > 1){
        setPlayAreaList(playAreaList.filter( el => el.props.letter !== "C"))
      }
    }
    if(e.keyCode === 68){
      let newlist = playAreaList.filter( el => el.props.letter === "D")
      if (newlist.length > 1){
        setPlayAreaList(playAreaList.filter( el => el.props.letter !== "D"))
      }
    }
    if(e.keyCode === 69){
      let newlist = playAreaList.filter( el => el.props.letter === "E")
      if (newlist.length > 1){
        setPlayAreaList(playAreaList.filter( el => el.props.letter !== "E"))
      }
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const el = <BlockComponent letter={letter}/>
      console.log(el)
      setPlayAreaList([...playAreaList, el])
    }, speedOfNewBlock);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [playAreaList]);

 
  return (
    <div className="game-containter">
      <div>
        <div className="play-ground" id="playarea">
         {playAreaList}
        </div>
        <div className="pavilion">
          {pavilionList}
        </div>
      </div>
      <div className="score"></div>
    </div>
  );
}

export default App;