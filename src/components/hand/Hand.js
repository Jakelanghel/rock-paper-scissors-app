import React from "react";
import { StyledHand } from "./Hand.Styled";

// replace apt txt with the had the you choose

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
