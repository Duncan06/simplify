import { useState, useEffect } from "react";
import main from "./App.module.css";
import Tile from "./components/Tile";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import MainScreen from "./components/MainScreen";
import Tile4 from "./components/Tile4";

function App() {
  const [expandedView, setExpandedView] = useState(false);
  const [tileOneHappy, setTileOneHappy] = useState(false);
  const [tileTwoSad, setTileTwoSad] = useState(false);
  const [tileThreeMad, setTileThreeMad] = useState(false);

  useEffect(() => {}, []);

  function expandView() {
    if (expandedView == false) {
      setExpandedView(true);
      document.documentElement.style.setProperty("--screen-height", "130%");
      document.documentElement.style.setProperty(
        "--slide",
        "translate(0%, -20%)"
      );
    } else {
      setExpandedView(false);
      document.documentElement.style.setProperty("--screen-height", "50%");
      document.documentElement.style.setProperty(
        "--slide",
        "translate(0%, 0%)"
      );
    }
  }

  function messageDisplay() {
    if (tileOneHappy) {
      return(
        <div className={main.response}>That's good to hear!</div>
      )   
    }
    else if (tileTwoSad) {
      return(
        <div className={main.response}>Are you sure you don't know?</div>
      )
    }
    else if (tileThreeMad) {
      return (
        <div className={main.response}>Take a breath.</div>
      )
    }
    else {
      return (
        <div className={main.response}>Hey!</div>
      )
    }
  }
  function happySelected() {
    setTileOneHappy(true);
    setTileTwoSad(false);
    setTileThreeMad(false);
  }

  function sadSelected() {
    setTileTwoSad(true);
    setTileOneHappy(false);
    setTileThreeMad(false);
  }
  function madSelected() {
    setTileThreeMad(true);
    setTileOneHappy(false);
    setTileTwoSad(false);
  }

  return (
    <div className={main.sections}>
      <Tile happy={happySelected} sad={sadSelected} mad={madSelected} />
      <Tile2 />
      <MainScreen
        expand={expandView}
        expanded={expandedView}
        happy={tileOneHappy}
        sad={tileTwoSad}
        mad={tileThreeMad}
        messageDisplay={messageDisplay}
      />
      <Tile3 />
    </div>
  );
}

export default App;
