import styled from "styled-components";

export const StyledChooseHandSpock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .container-pentagon {
    max-width: 250px;
    margin-top: 7rem;
    position: relative;
  }

  .img-pentagon {
    width: 100%;
  }

  .container-scissors {
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
  }

  .container-paper {
    position: absolute;
    top: 45px;
    right: -50px;
  }

  .container-rock {
    position: absolute;
    bottom: -75px;
    right: -20px;
  }

  .container-lizard {
    position: absolute;
    bottom: -75px;
    left: -20px;
  }

  .container-spock {
    position: absolute;
    top: 45px;
    left: -50px;
  }
`;
