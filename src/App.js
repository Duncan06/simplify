import { useState, useEffect } from "react";
import main from "./App.module.css";
import Tile from "./components/Tile";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import MainScreen from "./components/MainScreen";

function App() {
  const [expandedView, setExpandedView] = useState(false);
  const [tileOneHappy, setTileOneHappy] = useState(false);
  const [tileTwoSad, setTileTwoSad] = useState(false);
  const [tileThreeMad, setTileThreeMad] = useState(false);
  const item = localStorage.getItem("spaceArray");
  const [loadedPic, setLoadedPic] = useState(item ? JSON.parse(item) : []);

  useEffect(() => {
    SpacePic();
  }, []);

  useEffect(() => {
    localStorage.setItem("spaceArray", JSON.stringify(loadedPic));
  });
  
  
  function SpacePic() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedPic([...loadedPic, data]);
      });
  }

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
        sad={tileTwoSad}
        mad={tileThreeMad}
        spacePic={loadedPic}
      />
      <Tile3 />
    </div>
  );
}

export default App;
