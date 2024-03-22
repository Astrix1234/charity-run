import styled from 'styled-components';

export const StyledFollow = styled.div`
  p {
    padding-left: 1.5em;
    font-size: 1.25em;
    text-decoration-line: underline;
  }

  .website {
    position: relative;
    padding-bottom: 2em;
  }

  .social-media {
    position: relative;
    left: 0.75em;
    width: 80%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.8em;
    column-gap: 0.95em;
  }
`;
