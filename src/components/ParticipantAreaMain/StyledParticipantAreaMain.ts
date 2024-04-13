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
      gap: min(2rem, 5vw);
      white-space: nowrap;
    }

    .image {
      min-width: 50px;
      max-width: 400px;
    }
  }

  @media screen and (max-width: 800px) {
    .navigation {
      min-width: calc(100vw - 40px);
      display: flex;
      justify-content: space-between;
      gap: min(2rem, 5vw);
      white-space: nowrap;
    }

    .image {
      width: min(40vw, 400px);
      padding-bottom: 1rem;
    }
  }
`;
