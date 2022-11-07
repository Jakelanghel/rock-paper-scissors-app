import styled from "styled-components";

export const StyledChooseHand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  .container-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .container-flex {
    z-index: 1;
  }

  .triangle-img {
    position: absolute;
    z-index: 0;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
