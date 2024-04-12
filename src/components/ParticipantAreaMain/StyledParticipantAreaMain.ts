import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  gap: 4rem;
  position: relative;

  & > * {
    min-width: 510px;
    max-width: 50%;
  }

  @media screen and (max-width: 1349px) {
    .navigation {
      min-width: calc(100vw - 40px);
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      white-space: nowrap;
    }

    .image {
      min-width: 80px;
      max-width: 400px;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;
