import React from "react";
import { StyledHand } from "./Hand.Styled";

const Hand = (props) => {
  if (props.winner) {
    return (
      <StyledHand
        className={`${props.hand} ${props.bgClass}`}
        onClick={props.handleClick ? (e) => props.handleClick(e) : null}
      >
        <div className={`hand-bg ${props.hand}`}>
          <img src={props.img} alt="hand" className={`${props.hand}`} />
        </div>
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </StyledHand>
    );
  } else {
    return (
      <StyledHand
        className={`${props.hand} ${props.bgClass}`}
        onClick={props.handleClick ? (e) => props.handleClick(e) : null}
      >
        <div className={`hand-bg ${props.hand}`}>
          <img src={props.img} alt="hand" className={`${props.hand}`} />
        </div>
      </StyledHand>
    );
  }

  // return (

  // );
};

export default Hand;
