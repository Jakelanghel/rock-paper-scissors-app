import styled from "styled-components";

export const StyledHand = styled.div`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  .hand-bg {
    background-color: var(--white);
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cyan);
    border-radius: 50%;
    /* position: absolute; */
    top: 0;
  }

  .circle-1 {
    width: 300px;
    height: 300px;
  }
`;
