import { useEffect } from "react";
import classes from "./Tile.module.css";
import tileBackground from "./Tile3.module.css";

function Tile3(props) {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--tile-color"
    );
    console.log(color);
  }, []);

  function setColor(color) {
    document.documentElement.style.setProperty("--tile-color3", color);
  }

  function changeGreen() {
    setColor("green");
  }

  function changeRed() {
    setColor("red");
  }

  return (
    <div className={tileBackground.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={changeGreen}>Well!</button>
        <button onClick={changeRed}>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile3;
