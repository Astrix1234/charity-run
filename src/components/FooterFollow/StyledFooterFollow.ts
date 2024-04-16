import styled from 'styled-components';

export const StyledFollow = styled.div`
  p {
    font-size: 1.25em;
    text-decoration-line: underline;
  }

  .globe-website {
    padding-bottom: 2em;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
    gap: 0.8em;
  }

  .globe {
    width: 25px;
  }

  .social-media {
    display: flex;
    justify-content: space-between;
  }
`;
