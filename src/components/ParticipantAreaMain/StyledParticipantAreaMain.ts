import styled from 'styled-components';

export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  position: relative;

  & > * {
    min-width: 510px;
    max-width: 50%;
  }

  @media screen and (max-width: 1310px) {
    & > * {
      min-width: 80%;
      text-align: center;
    }
  }

  .photo {
    display: grid;
    place-content: center;
    text-align: right;
    gap: 1rem;
  }

  .addPhoto {
    display: flex;
    justify-content: right;
    align-items: center;
  }
`;
