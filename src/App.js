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
  const [previousHappy, setPreviousHappy] = useState(false);
  const [secondPreviousHappy, setSecondPreviousHappy] = useState(false);
  const [tileTwoSad, setTileTwoSad] = useState(false);
  const [tileThreeMad, setTileThreeMad] = useState(false);

  useEffect(() => {}, []);

  function expandView() {
    if (expandedView == false) {
      setExpandedView(true);
      if (tileOneHappy) {
        setPreviousHappy(true);
      }
      document.documentElement.style.setProperty("--screen-height", "130%");
      document.documentElement.style.setProperty(
        "--slide",
        "translate(0%, -20%)"
      );
    } else {
      setExpandedView(false);
      if (previousHappy) {
        setSecondPreviousHappy(true);
      } else {
        setSecondPreviousHappy(false);
      }
      setPreviousHappy(false);
      document.documentElement.style.setProperty("--screen-height", "50%");
      document.documentElement.style.setProperty(
        "--slide",
        "translate(0%, 0%)"
      );
    }
  }

  function happySelected() {
    setTileOneHappy(true);
    setTileTwoSad(false);
    setTileThreeMad(false);
    setSecondPreviousHappy(false);
  }

  function sadSelected() {
    setTileTwoSad(true);
    setTileOneHappy(false);
    setTileThreeMad(false);
    setPreviousHappy(false);
    setSecondPreviousHappy(false);
  }
  function madSelected() {
    setTileThreeMad(true);
    setTileOneHappy(false);
    setTileTwoSad(false);
    setPreviousHappy(false);
    setSecondPreviousHappy(false);
  }

  return (
    <div className={main.sections}>
      <Tile
        happy={happySelected}
        sad={sadSelected}
        mad={madSelected}
        happyNow={tileOneHappy}
        sadNow={tileTwoSad}
        madNow={tileThreeMad}
      />
      <Tile2 />
      <MainScreen
        expand={expandView}
        expanded={expandedView}
        happy={tileOneHappy}
        stillHappy={secondPreviousHappy}
        sad={tileTwoSad}
        mad={tileThreeMad}
      />
      <Tile3 />
    </div>
  );
}

export default App;
