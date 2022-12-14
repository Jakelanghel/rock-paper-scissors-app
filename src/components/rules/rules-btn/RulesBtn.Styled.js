import styled from "styled-components";

export const StyledRulesBtn = styled.button`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--white);

  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: transparent;

  padding: 0.75rem 2.75rem;

  border: solid 1px var(--white);
  border-radius: 10px;

  @media screen and (min-width: 950px) {
    align-self: flex-end;
  }
`;
