import React from "react";
import { StyledGameOverModal } from "./GameOverModal.Styled";
import { motion } from "framer-motion";

const GameOverModal = (props) => {
  const gameOverVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      transition: { type: "spring", delay: 3 },
      x: 0,
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
        <button onClick={props.playAgain}>play again</button>
      </motion.div>
    </StyledGameOverModal>
  );
};

export default GameOverModal;
