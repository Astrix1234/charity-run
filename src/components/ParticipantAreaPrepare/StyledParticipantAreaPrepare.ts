import styled from 'styled-components';

export const StyledPrepare = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;

  h1,
  p {
    font-weight: 600;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

  .foots {
    position: absolute;
  }

  .foot0 {
    rotate: -90deg;
    left: -4%;
    top: 68%;
  }

  .foot1 {
    rotate: -100deg;
    left: 0;
    top: 60%;
  }

  .foot2 {
    rotate: -90deg;
    right: 1%;
    top: 18%;
  }

  .foot3 {
    rotate: -100deg;
    right: -3%;
    top: 10%;
  }
`;
