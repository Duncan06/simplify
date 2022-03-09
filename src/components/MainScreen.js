import { useEffect } from "react";
import classes from "./MainScreen.module.css";

function mainScreen() {
  return (
    <div className={classes.backDrop}>
      <div className={classes.innerObject}>
        <p>Hey!</p>
      </div>
    </div>
  );
}

export default mainScreen;
