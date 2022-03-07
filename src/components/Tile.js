import { useState, useEffect } from "react";
import classes from "./Tile.module.css";

function Tile(props) {
  const [changeGreen, setChangeGreen] = useState(false);
  const [changeYellow, setChangeYellow] = useState(false);
  const [changeRed, setChangeRed] = useState(false);

  function tileOneClick() {
    let className = 'classes.tile';
    if (changeGreen) {
    } else if (changeYellow) {
    } else if (changeRed) {
    } else {
      return className;
    }
  }

  return (
    <div className={tileOneClick}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={classes.tileGreen}>Well!</button>
        <button>I don't know.</button>
        <button>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
