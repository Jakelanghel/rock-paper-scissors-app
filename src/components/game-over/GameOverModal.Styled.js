import styled from "styled-components";

export const StyledGameOverModal = styled.div`
  width: 100%;
  margin-top: 8rem;

  .container-game-over {
    text-align: center;
  }

  .game-over-txt {
    font-size: 3rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
  }

  button {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--score-text);
    background-color: var(--white);
    padding: 1rem 4rem;
    margin-top: 1rem;
    border: none;
    border-radius: 8px;
  }

  button:hover {
    color: var(--rock-gradient-2);
  }
`;
