import React from "react";
import { StyledScoreBoard } from "./ScoreBoard.Styled";
import { images } from "../../constants/images";

const ScoreBoard = (props) => {
  return (
    <StyledScoreBoard>
      <div className="container-logo">
        <img src={images.logos.logo} alt="" className="logo" />
      </div>

      <div className="container-score">
        {/* <p className="score">
          score<span>{props.score}</span>
        </p> */}
        <p className="score">Round: {props.round}</p>
        <p className="score">Player: {props.playerScore}</p>
        <p className="score">House: {props.computerScore}</p>
      </div>
    </StyledScoreBoard>
  );
};

export default ScoreBoard;
