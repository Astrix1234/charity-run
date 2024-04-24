import styled from 'styled-components';

export const StyledPhoto = styled.div`
  .imgContainer {
    width: 100%;
    margin-bottom: 1rem;
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
    font-size: min(3.5vw, 1rem);
  }

  label:hover {
    cursor: pointer;
    color: var(--orange);
  }
`;
