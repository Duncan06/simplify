import { useEffect } from "react";
import classes from "./Tile.module.css";

function Tile() {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--tile-color"
    );
  }, []);

  function setColor(color) {
    document.documentElement.style.setProperty("--tile-color", color);
  }

  function changeGreen() {
    setColor("#2afd22");
  }

  function changeBlue() {
    setColor("#22b8fd");
  }

  function changeRed() {
    setColor("#ff7aad");
  }

  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={changeGreen}>Well!</button>
        <button onClick={changeBlue}>I don't know.</button>
        <button onClick={changeRed}>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
