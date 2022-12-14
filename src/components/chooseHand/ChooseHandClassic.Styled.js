import styled from "styled-components";

export const StyledChooseHandClassic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  margin-top: 4rem;
  margin-bottom: 10rem;

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
    width: 275px;
    position: absolute;
    z-index: 0;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 950px) {
    .container-flex {
      gap: 5rem;
    }
    .triangle-img {
      top: 100px;
    }
  }
`;
