import styled from 'styled-components';

export const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  gap: 4rem;
  position: relative;

  & > *,
  .image {
    min-width: 510px;
    max-width: 50%;
  }

  @media screen and (max-width: 1349px) {
    & > * {
      min-width: 80%;
      text-align: center;
    }
  }

  .photo {
    margin-bottom: 3rem;
    display: grid;
    place-content: center;
    text-align: right;
    gap: 1rem;
  }

  .imgContainer {
    width: 100%;
    height: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .addPhoto {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  input[type='file'] {
    display: none;
  }

  label {
    transition: color 400ms;
  }

  label:hover {
    cursor: pointer;
    color: var(--orange);
  }
`;
