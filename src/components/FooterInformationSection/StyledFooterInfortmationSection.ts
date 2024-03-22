import styled from 'styled-components';

export const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 28.5% 29% 20.5% 1fr;
  gap: 2rem;
  white-space: nowrap;
  margin-bottom: 1.35em;

  h3 {
    color: white;
    margin-bottom: 2.4rem;
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }

  p {
    padding-bottom: 0.33em;
  }
`;
