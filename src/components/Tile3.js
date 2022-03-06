import classes from "./Tile.module.css";

function Tile3(props) {
  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button>Well!</button>
        <button>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile3;