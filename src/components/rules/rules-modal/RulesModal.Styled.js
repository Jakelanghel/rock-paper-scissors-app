import styled from "styled-components";

export const StyledRulesModal = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 0;

  background: var(--white);

  h1 {
    text-transform: uppercase;
  }

  @media screen and (min-width: 950px) {
    width: 450px;
    min-height: 0;
    height: 500px;
    padding: 3rem;
    align-items: flex-start;
    border-radius: 10px;

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;

    .close-icon {
      position: absolute;
      top: 3rem;
      right: 3rem;
    }

    .img-container {
      align-self: center;
    }
  }
`;
