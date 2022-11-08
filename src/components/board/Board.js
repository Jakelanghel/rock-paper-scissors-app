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
    score: 0,
  });

  const getHand = (classArr) => {
    let hand = null;
    classArr.forEach((className) => {
      gameData.options.forEach((option) => {
        if (className === option) hand = option;
      });
    });
    return hand;
  };

  const getWinner = (playerHand, computerHand) => {
    const data = {};
    if (playerHand === computerHand) {
      data.msg = "draw";
      data.x = 0;
      return data;
    } else if (playerHand === "rock") {
      if (computerHand === "scissors") {
        data.msg = "you win";
        data.x = 1;
        return data;
      } else {
        data.msg = "you loose";
        data.x = -1;
        return data;
      }
    } else if (playerHand === "paper") {
      if (computerHand === "rock") {
        data.msg = "you win";
        data.x = 1;
        return data;
      } else {
        data.msg = "you lose";
        data.x = -1;
        return data;
      }
    } else if (playerHand === "scissors") {
      if (computerHand === "paper") {
        data.msg = "you win";
        data.x = 1;
        return data;
      } else {
        data.msg = "you loose";
        data.x = -1;
        return data;
      }
    }
  };

  const getComputerThrow = () => {
    const randNum = Math.floor(Math.random() * 3);
    const computerHand = gameData.options[randNum];
    return computerHand;
  };

  const handleClick = (e) => {
    const classArr = Array.from(e.target.classList);
    const playerHand = getHand(classArr);
    const computerHand = getComputerThrow();
    const data = getWinner(playerHand, computerHand);
    const score = gameData.score + data.x;
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: playerHand,
      computerThrow: computerHand,
      endgame: data.msg,
      score: score,
    }));
  };

  const playAgain = () => {
    console.log("X");
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: null,
      computerThrow: null,
      endgame: null,
    }));
  };

  console.log(gameData);
  return (
    <StyledBoard>
      <ScoreBoard score={gameData.score} />

      {!gameData.playerThrow ? (
        <ChooseHand handleClick={handleClick} />
      ) : (
        <ShowChoice
          playerHand={gameData.playerThrow}
          bgClass={`${gameData.playerThrow}-bg`}
          compHand={gameData.computerThrow}
          compBgClass={`${gameData.computerThrow}-bg`}
          msg={gameData.endgame}
          playAgain={playAgain}
        />
      )}
      <StyledRulesBtn>Rules</StyledRulesBtn>
    </StyledBoard>
  );
};

export default Board;
