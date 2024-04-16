import styled from 'styled-components';

export const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin-bottom: 1.35rem;

  h3 {
    color: white;
    margin-bottom: 2.4rem;
    font-size: 1.45rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 0.33rem;
  }

  @media screen and (max-width: 720px) {
    gap: 2rem;
    justify-content: left;
    flex-flow: column wrap;
    h3 {
      margin-bottom: 1.4rem;
    }
    p {
      padding-bottom: 0.2rem;
    }
  }
`;
