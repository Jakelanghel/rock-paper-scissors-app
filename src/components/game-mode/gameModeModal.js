import React from "react";
import { StyledGameModeModal } from "./GameModeModal.Styled";

const GameModeModal = (props) => {
  const selectGameMode = (e) => {
    document
      .querySelectorAll(".mode-btn")
      .forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.toggle("selected");
  };

  const selectGameLength = (e) => {
    document
      .querySelectorAll(".option")
      .forEach((option) => option.classList.remove("selected"));
    e.target.classList.toggle("selected");
  };

  const startGame = () => {
    const selected = document.querySelectorAll(".selected");
    selected.forEach((element) => console.log(element.textContent));
  };
  return (
    <StyledGameModeModal>
      <h2>Choose Game Mode</h2>
      <div className="container-btns">
        <button className="mode-btn classic" onClick={selectGameMode}>
          Classic Rock Paper Scissors
        </button>
        <button className="mode-btn " onClick={selectGameMode}>
          Rock Paper Scissors Lizard Spock
        </button>
      </div>

      <div className="container-game-length">
        <h3>Best of</h3>
        <div className="container-options">
          <p className="option" onClick={selectGameLength}>
            3
          </p>
          <p className="option" onClick={selectGameLength}>
            5
          </p>
          <p className="option" onClick={selectGameLength}>
            7
          </p>
        </div>
      </div>

      <button className="start-btn" onClick={startGame}>
        Start Game!
      </button>
    </StyledGameModeModal>
  );
};

export default GameModeModal;
