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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.8em;
  }
`;
