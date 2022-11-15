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

  .ring-1 {
    width: 175px;
    height: 175px;
  }

  .ring-2 {
    width: 225px;
    height: 225px;
    z-index: 2;
  }

  .ring-3 {
    width: 285px;
    height: 285px;
    z-index: 1;
  }

  @media screen and (min-width: 950px) {
    width: 225px;
    height: 225px;

    .hand-bg {
      width: 180px;
      height: 180px;
    }

    .hand-img {
      width: 75px;
    }

    .ring-1 {
      width: 335px;
      height: 335px;
    }

    .ring-2 {
      width: 425px;
      height: 425px;
      z-index: 2;
    }

    .ring-3 {
      width: 550px;
      height: 550px;
      z-index: 1;
    }
  }
`;
