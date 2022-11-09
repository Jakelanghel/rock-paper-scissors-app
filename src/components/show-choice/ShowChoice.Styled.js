import styled from "styled-components";

export const StyledShowChoice = styled.div`
  width: 100%;

  .container-hands {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .container {
    width: 45%;
    min-height: 185px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .empty {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-color: var(--radialgradient-2);
    opacity: 0.4;
    margin-top: 1.5rem;
  }

  .container-hand {
    position: absolute;
    top: 0;
  }

  p {
    font-size: 1rem;
    color: var(--white);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: auto;
  }
`;
