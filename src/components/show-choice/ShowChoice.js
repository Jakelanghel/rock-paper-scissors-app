import React, { useS } from "react";
import Hand from "../hand/Hand";
import { StyledShowChoice } from "./ShowChoice.Styled";
import { images } from "../../constants/images";
import { motion } from "framer-motion";

const hands = images.hands;

const compHandVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 3 },
    position: "absolute",
  },
};

const gameOverVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    transition: { type: "spring", delay: 3 },
    position: "absolute",
  },
};

const ShowChoice = (props) => {
  const x = "lose";
  return (
    <StyledShowChoice>
      <div className="container-hands">
        <div className="player container">
          <Hand
            bgClass={props.bgClass}
            hand={props.hand}
            img={hands[props.playerHand]}
          />
          <p>you picked</p>
        </div>

        <div className="computer container">
          <div className="empty"></div>

          <motion.div
            variants={compHandVariants}
            initial="hidden"
            animate="visible"
            className="container-comp-hand"
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

      <motion.div
        variants={gameOverVariants}
        initial="hidden"
        animate="visible"
        className="container-game-over"
      >
        <p className="game-over-txt">you {"lose"}</p>
        <button>play again</button>
      </motion.div>
    </StyledShowChoice>
  );
};

export default ShowChoice;
