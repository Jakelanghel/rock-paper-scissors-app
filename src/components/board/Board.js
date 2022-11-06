import React, { useState } from "react";
import { StyledBoard } from "./StyledBoard";
import ChooseHand from "../chooseHand/ChooseHand";
import { StyledRulesBtn } from "../rules/RulesBtn.Styled";

const Board = () => {
  const [playerThrow, setPlayerThrow] = useState("");
  console.log(playerThrow);

  const getHand = (classArr) => {
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
      <ChooseHand handleClick={handleClick} />
      <StyledRulesBtn>Rules</StyledRulesBtn>
    </StyledBoard>
  );
};

export default Board;
