import { useEffect } from "react";
import classes from "./Tile.module.css";

function Tile() {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--tile-color"
    );
    console.log(color);
  }, []);

  function setColor(color) {
    document.documentElement.style.setProperty("--tile-color", color);
  }

  function changeGreen() {
    setColor("green");
  }

  function changeYellow() {
    setColor("yellow");
  }

  function changeRed() {
    setColor("red");
  }

  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={changeGreen}>Well!</button>
        <button onClick={changeYellow}>I don't know.</button>
        <button onClick={changeRed}>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
