import { useState } from "react";
import "./App.css";
import ControlPanel from "./ControlPanel";
import Pokemon from "./Pokemon";

function App() {
  const [pokemonPosition, setPokemonPosition] = useState({ x: 50, y: 50 });

  const moveUp = () => {
    setPokemonPosition({ x: pokemonPosition.x, y: pokemonPosition.y - 10 });
  };
  const moveDown = () => {
    setPokemonPosition({ x: pokemonPosition.x, y: pokemonPosition.y + 10 });
  };
  const moveLeft = () => {
    setPokemonPosition({ x: pokemonPosition.x -10, y: pokemonPosition.y });
  };
  const moveRight = () => {
    setPokemonPosition({ x: pokemonPosition.x +10, y: pokemonPosition.y });
  };

  const headerStyling = {
    fontSize: "5em",
  };

  return (
    <div className="forest">
      {/* <h1 style={headerStyling}>One more Pokemon - Game </h1> */}
      <Pokemon x={pokemonPosition.x} y={pokemonPosition.y} />
      <ControlPanel moveRight={moveRight} moveUp={moveUp} moveDown={moveDown} moveLeft={moveLeft} />
    </div>
  );
}

export default App;
