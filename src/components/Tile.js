import { useState, useEffect } from "react";
import classes from "./Tile.module.css";

function Tile(props) {
  const [changeGreen, setChangeGreen] = useState(false);
  const [changeYellow, setChangeYellow] = useState(false);
  const [changeRed, setChangeRed] = useState(false);
  const [currentTile, setCurrentTile] = useState(classes.tile);

  function tileOneClick() {
    if (changeGreen) {
      return setCurrentTile(classes.green)
    } else if (changeYellow) {

    } else if (changeRed) {

    } 
  }

  function nowGreen() {
    setChangeGreen(true);
    tileOneClick();
  }

  function nowYellow() {
    setChangeYellow = true;
  }

  function nowRed() {
    setChangeRed = true;
  }

  return (
    <div className={currentTile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={nowGreen}>Well!</button>
        <button>I don't know.</button>
        <button>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
