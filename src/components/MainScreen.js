import { useEffect } from "react";
import classes from "./MainScreen.module.css";

function mainScreen(props) {
  function messageDisplay() {
    if (props.happy) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>That's good to hear!</div>
          <div className={classes.music}>Want to listen to some music?</div>
          <div className={classes.musicOption}>
            <a href="https://music.youtube.com/">Youtube Music</a>
          </div>
        </div>
      );
    } else if (props.sad) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>Are you sure you don't know?</div>
        </div>
      );
    } else if (props.mad) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>Take a breath.</div>
        </div>
      );
    } else {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>Hey!</div>
        </div>
      );
    }
  }

  return (
    <div className={classes.contents}>
      <div className={classes.backDrop}>
        {messageDisplay()}
        <div className={classes.button}>
          <button onClick={props.expand}>Expand</button>
        </div>
      </div>
    </div>
  );
}

export default mainScreen;
