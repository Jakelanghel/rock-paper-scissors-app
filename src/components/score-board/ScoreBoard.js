import React from "react";
import { StyledScoreBoard } from "./ScoreBoard.Styled";

const ScoreBoard = () => {
  return (
    <StyledScoreBoard>
      <div className="container-title">
        <h1>rock paper scissors</h1>
      </div>

      <div className="container-score">
        <p className="score">
          score<span>12</span>
        </p>
      </div>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
