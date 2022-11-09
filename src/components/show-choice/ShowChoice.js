import React, { useS } from "react";
import Hand from "../hand/Hand";
import { StyledShowChoice } from "./ShowChoice.Styled";
import { images } from "../../constants/images";
import { motion } from "framer-motion";
import GameOverModal from "../game-over/GameOverModal";

const hands = images.hands;

const compHandVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
    position: "absolute",
    x: 0,
  },
};

const playerVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
    position: "absolute",
    x: 0,
  },
};

const ShowChoice = (props) => {
  return (
    <StyledShowChoice>
      <div className="container-hands">
        <div className="container">
          <div className="empty"></div>

          <motion.div
            variants={playerVariants}
            initial="hidden"
            animate="visible"
            className="container-hand"
          >
            <Hand
              bgClass={props.bgClass}
              hand={props.hand}
              img={hands[props.playerHand]}
            />
          </motion.div>

          <p>you picked</p>
        </div>

        <div className="container">
          <div className="empty"></div>

          <motion.div
            variants={compHandVariants}
            initial="hidden"
            animate="visible"
            className="container-hand"
          >
            <Hand
              bgClass={props.compBgClass}
              hand={props.compHand}
              img={hands[props.compHand]}
            />
          </motion.div>

          <p>the house picked</p>
        </div>
      </div>

      <GameOverModal msg={props.msg} playAgain={props.playAgain} />
    </StyledShowChoice>
  );
};

export default ShowChoice;
