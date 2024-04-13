import styled from 'styled-components';

export const StyledPrepare = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;

  padding-bottom: 5rem;

  h1,
  p {
    position: relative;
    z-index: 1;
    font-weight: 600;
    padding-left: min(6vw, 3rem);
    padding-right: min(3vw, 2rem);
  }

  h1 {
    font-size: min(7vw, 2.5rem);
    padding-bottom: min(1rem, 2vw);
  }

  p {
    font-size: 1.25rem;
    padding-bottom: min(1rem, 2vw);
  }

  a,
  .map {
    text-decoration-line: underline;
  }

  .map {
    max-width: 100%;
    cursor: pointer;
  }

  .modal {
    width: 100vw;
    min-height: 100%;
  }

  @media screen and (max-width: 1359px) {
    .foots {
      display: none;
    }
  }

  .foots {
    position: absolute;
    z-index: -4;
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
    right: 2%;
    top: 18%;
  }

  .foot3 {
    rotate: -100deg;
    right: 0;
    top: 10%;
  }
`;
