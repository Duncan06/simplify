import classes from "./Tile.module.css";

function Tile(props) {
  return (
    <div className={classes.tile}>
      <h3>How's it going?</h3>
      <div className={classes.buttons}>
        <button className={classes.buttons}>Well!</button>
        <button className={classes.buttons}>I don't know.</button>
        <button className={classes.buttons}>Not so great.</button>
      </div>
    </div>
  );
}

export default Tile;
