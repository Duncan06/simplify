import classes from "./MainScreen.module.css";

function mainScreen(props) {
  function messageDisplay() {
    if (props.happy && props.expanded) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>That's good to hear!</div>
          <div className={`${classes.response} ${classes.music}`}>
            Want to listen to some music?
          </div>
          <a
            className={`${classes.musicButton} ${classes.musicOption} ${classes.optionExpand} ${classes.musicOptionExpanded}`}
            href="https://music.youtube.com/"
            target="_blank"
          >
            Youtube Music
          </a>
          <a
            className={`${classes.musicButton} ${classes.musicOption2} ${classes.optionExpand} ${classes.musicOption2Expanded}`}
            href="https://open.spotify.com/"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      );
    } else if (props.happy) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>That's good to hear!</div>
          <div
            className={`${classes.response} ${classes.music} ${classes.slideIn}`}
          >
            Want to listen to some music?
          </div>
          <a
            className={`${classes.musicButton} ${classes.musicOption}`}
            href="https://music.youtube.com/"
            target="_blank"
          >
            Youtube Music
          </a>
          <a
            className={`${classes.musicButton} ${classes.musicOption2} ${classes.musicOption2Default}`}
            href="https://open.spotify.com/"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      );
    } else if (props.sad && props.expanded) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>Are you sure you don't know?</div>
          <div
            className={`${classes.response} ${classes.music} ${classes.slideIn}`}
          >
            Maybe you should reach out to a friend.
          </div>
          <div className={classes.spaceContainer}> 
            <img className={classes.space} src={`${props.spacePic[0].url}`} />
          </div>
          <div className={classes.picTitle}>
            Title: {props.spacePic[0].title}
          </div>
        </div>
      );
    } else if (props.sad) {
      return (
        <div className={classes.innerObject}>
          <div className={classes.response}>Are you sure you don't know?</div>
          <div
            className={`${classes.response} ${classes.music} ${classes.slideIn}`}
          >
            Maybe you should reach out to a friend.
          </div>
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
          <div className={`${classes.response} ${classes.slideIn}`}>Hey!</div>
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
