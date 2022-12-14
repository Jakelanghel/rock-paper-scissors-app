import React, { useState } from "react";

import ScoreBoard from "../score-board/ScoreBoard";
import ChooseHand from "../chooseHand/ChooseHand";
import ShowChoice from "../show-choice/ShowChoice";
import RulesModal from "../rules/rules-modal/RulesModal";

import { StyledBoard } from "./StyledBoard";
import { StyledRulesBtn } from "../rules/rules-btn/RulesBtn.Styled";
import { StyledBackDrop } from "../backdrop/StyledBackdrop";

const Board = () => {
  const [gameData, setGameData] = useState({
    options: ["rock", "paper", "scissors"],

    playerThrow: null,
    computerThrow: null,
    endgame: null,
    score: 0,
    rulesOpen: false,
    winner: null,
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
    const winData = { msg: "you win", x: 1, winner: "p" };
    const loseData = { msg: "you lose", x: 0, winner: "c" };
    const drawData = { msg: "draw", x: 0, winner: "d" };
    if (playerHand === computerHand) {
      return drawData;
    } else if (playerHand === "rock") {
      if (computerHand === "scissors") {
        return winData;
      } else {
        return loseData;
      }
    } else if (playerHand === "paper") {
      if (computerHand === "rock") {
        return winData;
      } else {
        return loseData;
      }
    } else if (playerHand === "scissors") {
      if (computerHand === "paper") {
        return winData;
      } else {
        return loseData;
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
      winner: data.winner,
    }));

    setTimeout(() => {
      setGameData((oldData) => ({
        ...oldData,
        score: score,
      }));
    }, 3000);
  };

  const playAgain = () => {
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: null,
      computerThrow: null,
      endgame: null,
      winner: null,
    }));
  };

  const toggleRules = () => {
    setGameData((oldData) => ({
      ...oldData,
      showRules: !oldData.showRules,
    }));
  };

  return (
    <StyledBoard>
      <h1>rock paper scissors</h1>

      <ScoreBoard score={gameData.score} />

      {!gameData.playerThrow ? (
        <ChooseHand handleClick={handleClick} />
      ) : (
        <ShowChoice
          playerHand={gameData.playerThrow}
          bgClass={`${gameData.playerThrow}-bg`}
          compBgClass={`${gameData.computerThrow}-bg`}
          compHand={gameData.computerThrow}
          msg={gameData.endgame}
          playAgain={playAgain}
          winner={gameData.winner}
        />
      )}
      <StyledRulesBtn onClick={toggleRules}>Rules</StyledRulesBtn>
      {gameData.showRules && (
        <StyledBackDrop>
          <RulesModal handleClick={toggleRules} />
        </StyledBackDrop>
      )}
    </StyledBoard>
  );
};

export default Board;
