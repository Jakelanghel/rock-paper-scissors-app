import React from "react";
import { StyledRulesModal } from "./RulesModal.Styled";
import { images } from "../../../constants/images";

const RulesModal = (props) => {
  return (
    <StyledRulesModal>
      <h1>rules</h1>
      <div className="img-container">
        <img src={images.rules.rules} alt="rules" />
      </div>

      <img
        src={images.icons.closeIcon}
        alt="close"
        className="close-icon"
        onClick={props.handleClick}
      />
    </StyledRulesModal>
  );
};

export default RulesModal;
