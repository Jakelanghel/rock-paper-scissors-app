import React from "react";
import { StyledHand } from "./Hand.Styled";

const Hand = (props) => {
  return (
    <StyledHand
      className={`${props.hand} ${props.bgClass}`}
      onClick={(e) => props.handleClick(e)}
    >
      <div className={`hand-bg ${props.hand}`}>
        <img src={props.img} alt="hand" className={`${props.hand}`} />
      </div>
    </StyledHand>
  );
};

export default Hand;
