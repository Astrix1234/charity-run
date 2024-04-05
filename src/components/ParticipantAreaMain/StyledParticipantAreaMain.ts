import styled from 'styled-components';

export const StyledMain = styled.div`
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
    width: 400px;
    height: 400px;
    margin-bottom: 3rem;
    // display: grid;
    // place-content: center;
    // text-align: right;
    // gap: 1rem;
  }

  .imgContainer {
    width: 100%;
    height: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // .addPhoto {
  //   display: flex;
  //   justify-content: right;
  //   align-items: center;
  // }
`;
