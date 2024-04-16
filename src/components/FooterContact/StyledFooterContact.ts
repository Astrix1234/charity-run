import styled from 'styled-components';

export const StyledContact = styled.div`
  .address {
    padding-bottom: 1.5em;
  }

  .mail {
    text-decoration-line: underline;
  }

  @media screen and (max-width: 720px) {
    .address {
      padding-bottom: 0.5em;
    }
  }
`;
