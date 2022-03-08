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
    var elem = document.getElementById("buttonOne");
    elem.innerHTML = "😁";
    var elem = document.getElementById("buttonTwo");
    elem.innerHTML = "I don't know.";
    var elem = document.getElementById("buttonThree");
    elem.innerHTML = "Not so great.";
  }

  function changeBlue() {
    setColor("#22b8fd");
    var elem = document.getElementById("buttonOne");
    elem.innerHTML = "Well!";
    var elem = document.getElementById("buttonTwo");
    elem.innerHTML = "🥺";
    var elem = document.getElementById("buttonThree");
    elem.innerHTML = "Not so great.";
  }

  function changeRed() {
    setColor("#ff7aad");
    var elem = document.getElementById("buttonOne");
    elem.innerHTML = "Well!";
    var elem = document.getElementById("buttonTwo");
    elem.innerHTML = "I don't know.";
    var elem = document.getElementById("buttonThree");
    elem.innerHTML = "😑";
    
  }

  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button onClick={changeGreen} id="buttonOne">Well!</button>
        <button onClick={changeBlue} id="buttonTwo">I don't know.</button>
        <button onClick={changeRed} id="buttonThree">Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
