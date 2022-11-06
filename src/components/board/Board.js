import React, { useState } from "react";
import { StyledBoard } from "./StyledBoard";
import ScoreBoard from "../score-board/ScoreBoard";
import ChooseHand from "../chooseHand/ChooseHand";
import { StyledRulesBtn } from "../rules/RulesBtn.Styled";
import ShowChoice from "../show-choice/ShowChoice";

const Board = () => {
  const randNum = Math.floor(Math.random() * 3);
  const optionsArr = ["rock", "paper", "scissors"];
  const computerHand = optionsArr[randNum];

  const [playerThrow, setPlayerThrow] = useState("");
  const [computerThrow, setComputerThrow] = useState(computerHand);

  const getHand = (classArr, optionsArr) => {
    const options = ["rock", "paper", "scissors"];
    let hand = null;
    classArr.forEach((className) => {
      options.forEach((option) => {
        if (className === option) hand = option;
      });
    });
    return hand;
  };

  const handleClick = (e) => {
    const classArr = Array.from(e.target.classList);
    const hand = getHand(classArr);
    setPlayerThrow(hand);
  };
  return (
    <StyledBoard>
      <ScoreBoard />

      {!playerThrow ? (
        <ChooseHand handleClick={handleClick} />
      ) : (
        <ShowChoice
          playerHand={playerThrow}
          bgClass={`${playerThrow}-bg`}
          compHand={computerThrow}
          compBgClass={`${computerThrow}-bg`}
        />
      )}

      {/* <ChooseHand handleClick={handleClick} /> */}
      <StyledRulesBtn>Rules</StyledRulesBtn>
    </StyledBoard>
  );
};

export default Board;
