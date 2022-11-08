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
  },
  visible: {
    opacity: 1,
    transition: { delay: 1 },
    position: "absolute",
  },
};

const ShowChoice = (props) => {
  console.log(props.playAgain);
  return (
    <StyledShowChoice>
      <div className="container-hands">
        <div className="player container">
          <Hand
            bgClass={props.bgClass}
            hand={props.hand}
            img={hands[props.playerHand]}
            handleClick={() => console.log("X")}
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
              handleClick={() => console.log("X")}
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
