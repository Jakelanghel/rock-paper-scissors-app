import React, { useState } from "react";
import { StyledBoard } from "./StyledBoard";
import ScoreBoard from "../score-board/ScoreBoard";
import ChooseHand from "../chooseHand/ChooseHand";
import { StyledRulesBtn } from "../rules/RulesBtn.Styled";
import ShowChoice from "../show-choice/ShowChoice";

const Board = () => {
  const [gameData, setGameData] = useState({
    options: ["rock", "paper", "scissors"],

    playerThrow: null,
    computerThrow: null,
    endgame: null,
  });

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

  const getWinner = () => {
    if (gameData.playerThrow === gameData.computerThrow) {
      return "draw";
    } else if (gameData.playerThrow === "rock") {
      if (gameData.computerThrow === "scissors") {
        return "you win";
      } else {
        return "you loose";
      }
    } else if (gameData.playerThrow === "paper") {
      if (gameData.computerThrow === "rock") {
        return "you win";
      } else {
        return "you loose";
      }
    } else if (gameData.playerThrow === "scissors") {
      if (gameData.computerThrow === "paper") {
        return "you win";
      } else {
        return "you loose";
      }
    }
  };

  const getComputerThrow = () => {
    const randNum = Math.floor(Math.random() * 3);
    const optionsArr = ["rock", "paper", "scissors"];
    const computerHand = optionsArr[randNum];
    return computerHand;
  };

  const handleClick = (e) => {
    const classArr = Array.from(e.target.classList);
    const playerHand = getHand(classArr);
    const computerHand = getComputerThrow();
    const outcome = getWinner();
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: playerHand,
      computerThrow: computerHand,
      endgame: outcome,
    }));
  };
  return (
    <StyledBoard>
      <ScoreBoard />

      {!gameData.playerThrow ? (
        <ChooseHand handleClick={handleClick} />
      ) : (
        <ShowChoice
          playerHand={gameData.playerThrow}
          bgClass={`${gameData.playerThrow}-bg`}
          compHand={gameData.computerThrow}
          compBgClass={`${gameData.computerThrow}-bg`}
          msg={gameData.endgame}
        />
      )}
      <StyledRulesBtn>Rules</StyledRulesBtn>
    </StyledBoard>
  );
};

export default Board;
