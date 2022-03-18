import classes from "./Tile.module.css";

function Tile(props) {
  function setColor(color) {
    document.documentElement.style.setProperty("--tile-color", color);
  }

  function changeGreen() {
    setColor("#2afd22");
    props.happy();
  }

  function changeBlue() {
    setColor("#22b8fd");
    props.sad();
  }

  function changeRed() {
    setColor("#ff7aad");
    props.mad();
  }

  function selection() {
    if (props.happyNow) {
      return (
        <div className={classes.buttons}>
          <button onClick={changeGreen}>😁</button>
          <button onClick={changeBlue}>I don't know.</button>
          <button onClick={changeRed}>Not so great.</button>
        </div>
      );
    } else if (props.sadNow) {
      return (
        <div className={classes.buttons}>
          <button onClick={changeGreen}>Well!</button>
          <button onClick={changeBlue}>🥺</button>
          <button onClick={changeRed}>Not so great.</button>
        </div>
      );
    } else if (props.madNow) {
      return (
        <div className={classes.buttons}>
          <button onClick={changeGreen}>Well!</button>
          <button onClick={changeBlue}>I don't know.</button>
          <button onClick={changeRed}>😑</button>
        </div>
      );
    } else {
      return (
        <div className={classes.buttons}>
          <button onClick={changeGreen}>Well!</button>
          <button onClick={changeBlue}>I don't know.</button>
          <button onClick={changeRed}>Not so great.</button>
        </div>
      );
    }
  }

  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      {selection()}
    </div>
  );
}

export default Tile;
