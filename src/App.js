import React from "react";
import { GlobalStyles } from "./components/shared/Global.js";
import Board from "./components/board/Board.js";

function App() {
  return (
    <div className="container-app">
      <GlobalStyles />
      <Board />
    </div>
  );
}

export default App;
