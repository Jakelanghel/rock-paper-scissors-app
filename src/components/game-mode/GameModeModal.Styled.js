import styled from "styled-components";

export const StyledGameModeModal = styled.div`
  width: 90%;
  height: 450px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  text-align: center;
  border-radius: 10px;
  background-color: var(--white);
  color: var(--dark-text);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem 0;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  h2 {
    font-size: 1.75rem;
  }

  .mode-btn {
    font-size: 1.15rem;
    letter-spacing: 0.5px;
    padding: 1rem 1.5rem;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .classic {
    margin-bottom: 1rem;
  }

  h3 {
    width: 115px;
    margin: 0 auto;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: solid 1px var(--dark-text);
  }

  .container-options {
    width: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .option {
    font-size: 1.25rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 50%;
    border-radius: 50px;
    padding: 1rem 1.5rem;
  }

  .start-btn {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0 auto;
    padding: 0.75rem 2.5rem;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .start-btn:hover {
    background-color: var(--radialgradient-1);
    color: var(--white);
    opacity: 0.8;
  }

  .selected {
    background-color: var(--radialgradient-1);
    color: var(--white);
    opacity: 0.8;
  }
`;
