import React from "react";
import { StyledShowChoice } from "./ShowChoice.Styled";
import { images } from "../../constants/images";
import { motion } from "framer-motion";
import { useIsLarge } from "../../hooks/UseMediaQuery";
import Hand from "../hand/Hand";
// import GameOverModal from "../game-over/GameOverModal";

const hands = images.hands;

const ShowChoice = (props) => {
  const isLarge = useIsLarge();
  const compHandVariants = !isLarge
    ? {
        hidden: {
          opacity: 0,
          x: "100vw",
        },
        visible: {
          opacity: 1,
          transition: { delay: 2 },
          x: 0,
          y: 0,
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: "100vw",
        },
        visible: {
          opacity: 1,
          transition: { delay: 2 },
          x: 50,
          y: 0,
        },
      };

  const playerVariants = !isLarge
    ? {
        hidden: {
          opacity: 0,
          x: "-100vw",
        },
        visible: {
          opacity: 1,
          transition: { delay: 1 },
          x: 0,
          y: 0,
        },
      }
    : {
        hidden: {
          opacity: 0,
          x: "-100vw",
        },
        visible: {
          opacity: 1,
          transition: { delay: 1 },
          x: -50,
          y: 0,
        },
      };

  return (
    <StyledShowChoice>
      <div className="container-hands">
        <div className="container">
          <div className="empty empty-player"></div>

          <motion.div
            variants={playerVariants}
            initial="hidden"
            animate="visible"
            className="container-hand"
          >
            <div className="hand">
              <Hand
                bgClass={props.bgClass}
                hand={props.hand}
                img={hands[props.playerHand]}
                winner={props.winner === "p" ? true : false}
                className="hand"
              />
            </div>
            <p>you picked</p>
          </motion.div>
        </div>

        <div className="container">
          <div className="empty empty-computer"></div>

          <motion.div
            variants={compHandVariants}
            initial="hidden"
            animate="visible"
            className="container-hand"
          >
            <div className="hand">
              <Hand
                bgClass={props.compBgClass}
                hand={props.compHand}
                img={hands[props.compHand]}
                winner={props.winner === "c" ? true : false}
                className="hand"
              />
            </div>

            <p>the house picked</p>
          </motion.div>
        </div>
      </div>

      {/* <GameOverModal msg={props.msg} playAgain={props.playAgain} /> */}
    </StyledShowChoice>
  );
};

export default ShowChoice;
