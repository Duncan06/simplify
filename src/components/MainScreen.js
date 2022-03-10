import { useEffect } from "react";
import classes from "./MainScreen.module.css";

function mainScreen(props) {
  return (
    <div className={classes.backDrop}>
      <div className={classes.innerObject}>
        <p>Hey!</p>
      </div>
      <div className={classes.button}>
        <button onClick={props.expand}>Expand</button>
      </div>
    </div>
  );
}

export default mainScreen;
