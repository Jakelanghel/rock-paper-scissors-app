import React from "react";
import { images } from "../../constants/images";
import { StyledChooseHandClassic } from "./ChooseHandClassic.Styled";
import { StyledChooseHandSpock } from "./ChooseHandSpock.Styled";
import Hand from "../hand/Hand";

const ChooseHandClassic = (props) => {
  return props.isClassic ? (
    <StyledChooseHandClassic>
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
    </StyledChooseHandClassic>
  ) : (
    <StyledChooseHandSpock>
      <div className="container-pentagon">
        <img
          src={images.backgrounds.bgPentagon}
          alt=""
          className="img-pentagon"
        />

        <div className="container-scissors">
          <Hand
            bgClass="scissors-bg"
            hand="scissors"
            img={images.hands.scissors}
            handleClick={props.handleClick}
          />
        </div>

        <div className="container-paper">
          <Hand
            bgClass="paper-bg"
            hand="paper"
            img={images.hands.paper}
            handleClick={props.handleClick}
          />
        </div>

        <div className="container-lizard">
          <Hand
            bgClass="lizard-bg"
            hand="lizard"
            img={images.hands.lizard}
            handleClick={props.handleClick}
          />
        </div>

        <div className="container-rock">
          <Hand
            bgClass="rock-bg"
            hand="rock"
            img={images.hands.rock}
            handleClick={props.handleClick}
          />
        </div>

        <div className="container-spock">
          <Hand
            bgClass="spock-bg"
            hand="spock"
            img={images.hands.spock}
            handleClick={props.handleClick}
          />
        </div>
      </div>
    </StyledChooseHandSpock>
  );
};

export default ChooseHandClassic;
