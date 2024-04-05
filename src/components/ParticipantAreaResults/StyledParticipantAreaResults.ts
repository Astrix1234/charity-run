import styled from 'styled-components';

export const StyledResults = styled.div`
  border-left: 2px solid black;
  text-align: right;
  padding-left: 2rem;

  @media screen and (max-width: 1310px) {
    border-top: 2px solid black;
    border-left: 0;
    padding-top: 4rem;
    text-align: center;
  }

  h2,
  h3 {
    font-weight: 500;
    padding-bottom: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }
`;
