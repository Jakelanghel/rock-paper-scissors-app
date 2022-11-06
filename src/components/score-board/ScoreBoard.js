import React from "react";
import { StyledScoreBoard } from "./ScoreBoard.Styled";
import { images } from "../../constants/images";

const ScoreBoard = () => {
  return (
    <StyledScoreBoard>
      <div className="container-logo">
        <img src={images.logos.logo} alt="" className="logo" />
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
