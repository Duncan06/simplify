import { useEffect } from "react";
import classes from "./MainScreen.module.css";

function mainScreen(props) {
  
  return (
    <div className={classes.contents}>
      <div className={classes.backDrop}>
        <div className={classes.innerObject}>
          {props.messageDisplay()}
        </div>
        <div className={classes.button}>
          <button onClick={props.expand}>Expand</button>
        </div>
      </div>
    </div>
  );
}

export default mainScreen;
