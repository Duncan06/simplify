import classes from "./Tile.module.css";

function Tile(props) {
  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button>Well!</button>
        <button>I don't know.</button>
        <button>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
