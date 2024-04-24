import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;

  .navigation,
  .photo {
    width: 50%;
  }

  @media screen and (max-width: 1349px) {
    flex-flow: column wrap;
    gap: 1rem;

    .photo {
      width: min(500px, 90vw);
      margin-bottom: 1rem;
    }

    .addPhoto {
      justify-content: flex-start;
    }

    .navigation {
      width: min(606px, 90vw);
      text-align: center;
    }
  }

  @media screen and (max-width: 800px) {
    .navigation {
      text-align: left;
      width: 100%;
    }
  }
`;
