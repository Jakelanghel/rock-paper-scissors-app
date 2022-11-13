import styled from "styled-components";

export const StyledScoreBoard = styled.div`
  width: 85%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: solid 3px var(--header-outline);
  border-radius: 7px;
  padding: 1rem;
  margin-bottom: 6rem;

  .logo {
    width: 100px;
    margin-top: 5px;
  }

  .container-score {
    width: 75px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: var(--white);
    padding: 0.4rem 2.5rem;
  }

  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--score-text);
  }

  span {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
  }
`;
