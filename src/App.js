import { useState, useEffect } from "react";
import main from "./App.module.css";
import Tile from "./components/Tile";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import MainScreen from "./components/MainScreen";
import Tile4 from "./components/Tile4";

function App() {
  const [expandedView, setExpandedView] = useState(false);
  useEffect(() => {}, []);

  function expandView() {
    if (expandedView == false) {
      setExpandedView(true);
      document.documentElement.style.setProperty("--screen-height", "130%");
      document.documentElement.style.setProperty("--slide", "translate(0%, -20%)");
    } else {
      setExpandedView(false);
      document.documentElement.style.setProperty("--screen-height", "50%");
      document.documentElement.style.setProperty("--slide", "translate(0%, 0%)");
    }
  }

  return (
    <div className={main.sections}>
      <Tile />
      <Tile2 />
      <MainScreen expand={expandView} expanded={expandedView} />
      <Tile3 />
    </div>
  );
}

export default App;
