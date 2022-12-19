import React, { useState } from "react";
import { GlobalStyles } from "./components/shared/Global.js";
import Board from "./components/board/Board.js";
import GameModeModal from "./components/game-mode/gameModeModal";
import { StyledContainerApp } from "./components/container-app/ContainerApp.Styled.js";

function App() {
  const [gameModeData, setGameModeData] = useState({
    classic: null,
    length: null,
    started: false,
  });

  return (
    <StyledContainerApp>
      <GlobalStyles />
      {!gameModeData.started ? (
        <GameModeModal setGameModeData={setGameModeData} />
      ) : (
        <Board gameModeData={gameModeData} setGameModeData={setGameModeData} />
      )}
    </StyledContainerApp>
  );
}

export default App;
