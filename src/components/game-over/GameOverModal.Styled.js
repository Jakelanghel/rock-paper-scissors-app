import styled from "styled-components";

export const StyledGameOverModal = styled.div`
  width: 100%;

  .container-game-over {
    text-align: center;
    margin-top: 3rem;
    top: 0;
  }

  .game-over-txt {
    font-size: 3rem;
    font-weight: 700;
  }

  button {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--score-text);
    padding: 0.75rem 3rem;
    margin-top: 1rem;
    border: none;
    border-radius: 8px;
  }
`;
