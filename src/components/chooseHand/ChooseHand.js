import React from "react";
import { images } from "../../constants/images";
import { StyledChooseHand } from "./ChooseHand.Styled";
import Hand from "../hand/Hand";

const ChooseHand = (props) => {
  return (
    <StyledChooseHand>
      <div className="container-flex">
        <Hand
          bgClass="paper-bg"
          hand="paper"
          img={images.hands.paper}
          handleClick={props.handleClick}
        />
        <Hand
          bgClass="scissors-bg"
          hand="scissors"
          img={images.hands.scissors}
          handleClick={props.handleClick}
        />
      </div>

      <div className="container-flex">
        <Hand
          bgClass="rock-bg"
          hand="rock"
          img={images.hands.rock}
          handleClick={props.handleClick}
        />
      </div>

      <img
        src={images.backgrounds.bgTriangle}
        alt=""
        className="triangle-img"
      />
    </StyledChooseHand>
  );
};

export default ChooseHand;
