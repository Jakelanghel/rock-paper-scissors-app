import React from "react";
import { StyledHand } from "./Hand.Styled";
import { motion } from "framer-motion";
import Ring from "./Ring";

const Hand = (props) => {
  const ringVariant1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 2.25 },
    },
  };
  const ringVariant2 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 2.35 },
    },
  };
  const ringVariant3 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 2.45 },
    },
  };
  if (props.winner) {
    return (
      <StyledHand
        className={`${props.hand} ${props.bgClass}`}
        onClick={props.handleClick ? (e) => props.handleClick(e) : null}
      >
        <div className={`hand-bg ${props.hand}`}>
          <img
            src={props.img}
            alt="hand"
            className={`${props.hand} hand-img`}
          />
        </div>
        <Ring ringVariant={ringVariant1} class="ring-1" />
        <Ring ringVariant={ringVariant2} class="ring-2" />
        <Ring ringVariant={ringVariant3} class="ring-3" />
      </StyledHand>
    );
  } else {
    return (
      <StyledHand
        className={`${props.hand} ${props.bgClass}`}
        onClick={props.handleClick ? (e) => props.handleClick(e) : null}
      >
        <div className={`hand-bg ${props.hand}`}>
          <img
            src={props.img}
            alt="hand"
            className={`${props.hand} hand-img`}
          />
        </div>
      </StyledHand>
    );
  }
};

export default Hand;
