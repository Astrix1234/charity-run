import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;

  & > * {
    min-width: 50%;
  }

  @media screen and (max-width: 1310px) {
    flex-wrap: wrap;
    gap: 4rem;
    text-align: center;
    justify-content: center;

    & > * {
      max-width: 80%;
    }
  }

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
