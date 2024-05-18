import styled from 'styled-components';

export const StyledSupport = styled.div`
  .bank,
  .account,
  .footnote,
  .nip {
    padding-bottom: 1.5em;
  }

  a {
    text-decoration: underline;
  }

  @media screen and (max-width: 720px) {
    .bank,
    .account,
    .footnote,
    .nip {
      padding-bottom: 0.5em;
    }
  }
`;
