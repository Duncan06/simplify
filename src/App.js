import main from "./App.module.css";
import Tile from "./components/Tile";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import Tile4 from "./components/Tile4";

function App() {
  return(
    <body>
      <div className={main.sections}>
        <Tile />
        <Tile2 />
        <Tile3 />
      </div>
    </body>
  );
}

export default App;
