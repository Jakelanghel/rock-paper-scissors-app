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
    display: flex;
    align-items: center;
    position: relative;
  }

  .empty {
    width: 100px;
    height: 100px;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: var(--radialgradient-2);
    opacity: 0.3;
    position: absolute;
  }

  .container-hand {
    position: relative;
    top: 0;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: var(--white);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 1.5rem;
  }
`;
