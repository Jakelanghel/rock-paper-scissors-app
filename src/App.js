import React from "react";
import { GlobalStyles } from "./components/shared/Global.js";
import ScoreBoard from "./components/score-board/ScoreBoard.js";
import Board from "./components/board/Board.js";

function App() {
  return (
    <div>
      <GlobalStyles />
      <ScoreBoard />
      <Board />
    </div>
  );
}

export default App;
