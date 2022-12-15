import React from "react";
import { StyledGameOverModal } from "./GameOverModal.Styled";
import { motion } from "framer-motion";
import { useIsLarge } from "../../hooks/UseMediaQuery";

const GameOverModal = (props) => {
  const isLarge = useIsLarge();
  const gameOver = props.round === props.gameLength;
  const gameOverVariants = !isLarge
    ? {
        hidden: {
          opacity: 0,
          x: "100vw",
        },
        visible: {
          opacity: 1,
          transition: { type: "spring", delay: 3 },
          x: 0,
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: 0,
        },
        visible: {
          opacity: 1,
          transition: { type: "spring", delay: 3 },
          y: -275,
        },
      };
  return (
    <StyledGameOverModal>
      <motion.div
        variants={gameOverVariants}
        initial="hidden"
        animate="visible"
        className="container-game-over"
      >
        <p className="game-over-txt">{props.msg}</p>
        <button onClick={gameOver ? props.reset : props.playAgain}>
          {gameOver ? "New Game" : "Next Round"}
        </button>
      </motion.div>
    </StyledGameOverModal>
  );
};

export default GameOverModal;
