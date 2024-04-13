import styled from 'styled-components';

export const StyledHeading = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;
  width: 100%;

  h1 {
    text-align: center;
    font-size: min(5.625rem, 13.2vw);
    font-weight: 800;
  }

  h2 {
    font-size: min(5.625rem, 10.2vw);
    font-weight: 400;
    padding-bottom: 0;
    white-space: nowrap;
  }

  svg {
    width: 100%;
  }
`;
