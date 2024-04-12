import styled from 'styled-components';

export const StyledPhoto = styled.div`
  .photo {
    /* margin-bottom: 5rem;
    display: grid;
    place-content: center;
    text-align: right;
    gap: 2rem; */
  }

  .imgContainer {
    width: 100%;
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
