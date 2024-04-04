import styled from 'styled-components';

export const StyledMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
