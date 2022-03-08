import main from "./App.module.css";
import Tile from "./components/Tile";
import Tile2 from "./components/Tile2";
import Tile3 from "./components/Tile3";
import MainScreen from "./components/MainScreen";
import Tile4 from "./components/Tile4";


function App() {
  return(
    <div className={main.sections}>
      <Tile />
      <Tile2 />
      <MainScreen />  
      <Tile3 />
    </div>
  );
}

export default App;
