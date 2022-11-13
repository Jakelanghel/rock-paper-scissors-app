import styled from "styled-components";

export const StyledHand = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 100;

  .hand-bg {
    background-color: var(--white);
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .ring-1 {
    width: 185px;
    height: 185px;
  }

  .ring {
    position: absolute;
    z-index: 50;
    right: 50%;
    transform: translateX(50%);

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--winner-bg);
  }

  .ring-2 {
    width: 245px;
    height: 245px;
    z-index: 2;
  }

  .ring-3 {
    width: 310px;
    height: 310px;
    z-index: 1;
  }
`;
