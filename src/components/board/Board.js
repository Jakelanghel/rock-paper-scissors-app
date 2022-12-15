import React, { useState } from "react";

import ScoreBoard from "../score-board/ScoreBoard";
import ChooseHand from "../chooseHand/ChooseHand";
import ShowChoice from "../show-choice/ShowChoice";
import RulesModal from "../rules/rules-modal/RulesModal";
import GameOverModal from "../game-over/GameOverModal";

import { StyledBoard } from "./StyledBoard";
import { StyledRulesBtn } from "../rules/rules-btn/RulesBtn.Styled";
import { StyledBackDrop } from "../backdrop/StyledBackdrop";

const Board = (props) => {
  const [gameData, setGameData] = useState({
    options: ["rock", "paper", "scissors"],

    playerThrow: null,
    computerThrow: null,
    msg: null,
    playerScore: 0,
    computerScore: 0,
    rulesOpen: false,
    winner: null,
    gameLength: props.gameModeData.length,
    round: 1,
    isClassic: props.gameModeData.isClassic,
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
    const winData = { msg: "you win", pScore: 1, cScore: 0, winner: "p" };
    const loseData = { msg: "you lose", pScore: 0, cScore: 1, winner: "c" };
    const drawData = { msg: "draw", pScore: 0, cScore: 0, winner: "d" };
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
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: playerHand,
      computerThrow: computerHand,
      msg: data.msg,
      winner: data.winner,
    }));

    setTimeout(() => {
      setGameData((oldData) => ({
        ...oldData,
        playerScore: oldData.playerScore + data.pScore,
        computerScore: oldData.computerScore + data.cScore,
      }));
    }, 3000);
  };

  const playAgain = () => {
    setGameData((oldData) => ({
      ...oldData,
      playerThrow: null,
      computerThrow: null,
      msg: null,
      winner: null,
      round: gameData.msg === "draw" ? oldData.round : oldData.round++,
    }));
  };

  const reset = () => {
    props.setGameModeData({ classic: null, length: null, started: false });
  };

  const toggleRules = () => {
    setGameData((oldData) => ({
      ...oldData,
      showRules: !oldData.showRules,
    }));
  };

  return (
    <StyledBoard>
      <h1 className="title">rock paper scissors</h1>
      <ScoreBoard
        playerScore={gameData.playerScore}
        computerScore={gameData.computerScore}
        round={gameData.round}
      />
      {!gameData.playerThrow ? (
        <ChooseHand handleClick={handleClick} />
      ) : (
        <ShowChoice
          playerHand={gameData.playerThrow}
          bgClass={`${gameData.playerThrow}-bg`}
          compBgClass={`${gameData.computerThrow}-bg`}
          compHand={gameData.computerThrow}
          playAgain={playAgain}
          winner={gameData.winner}
        />
      )}

      {gameData.msg ? (
        <GameOverModal
          playAgain={playAgain}
          msg={gameData.msg}
          round={gameData.round}
          gameLength={gameData.gameLength}
          reset={reset}
        />
      ) : null}
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
