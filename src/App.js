import React, { useState } from "react";
import { GlobalStyles } from "./components/shared/Global.js";
import Board from "./components/board/Board.js";
import GameModeModal from "./components/game-mode/gameModeModal";
import { StyledBackDrop } from "./components/backdrop/StyledBackdrop.js";

function App() {
  const [gameMode, setGameMode] = useState(false);

  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        {!gameMode ? (
          <GameModeModal gameMode={gameMode} setGameMode={setGameMode} />
        ) : (
          <Board />
        )}
      </div>
    </>
  );
}

export default App;
