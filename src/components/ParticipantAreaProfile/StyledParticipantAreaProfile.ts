import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  h1 {
    font-size: 3.125rem;
    font-weight: 500;
    margin-bottom: 5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2.5rem;
  }
`;
