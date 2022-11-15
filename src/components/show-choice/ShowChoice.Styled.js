import styled from "styled-components";

export const StyledShowChoice = styled.div`
  width: 100%;
  margin-top: 7rem;
  max-width: 500px;

  .container-hands {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .container-hand {
    position: absolute;
    top: -20px;
    display: flex;
    flex-direction: column;
  }

  .empty {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--radialgradient-2);
    opacity: 0.3;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: var(--white);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 950px) {
    max-width: 1000px;
    margin-top: 3rem;

    .container {
      width: 45%;
    }

    .empty {
      width: 170px;
      height: 170px;
      margin-top: 6rem;
    }

    .empty-computer {
      margin-left: 6rem;
    }

    .empty-player {
      margin-right: 6rem;
    }

    .container-hand {
      p {
        order: 1;
        font-size: 1.15rem;
      }

      .hand {
        order: 2;
        margin-top: 3rem;
      }
    }
  }
`;
