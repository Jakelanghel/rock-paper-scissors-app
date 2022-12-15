import React, { useState } from "react";
import { GlobalStyles } from "./components/shared/Global.js";
import Board from "./components/board/Board.js";
import GameModeModal from "./components/game-mode/gameModeModal";

function App() {
  const [gameModeData, setGameModeData] = useState({
    classic: null,
    length: null,
    started: false,
  });

  console.log(gameModeData);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        {!gameModeData.started ? (
          <GameModeModal setGameModeData={setGameModeData} />
        ) : (
          <Board
            gameModeData={gameModeData}
            setGameModeData={setGameModeData}
          />
        )}
      </div>
    </>
  );
}

export default App;
