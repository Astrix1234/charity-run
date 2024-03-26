import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: white url('/charity-run/images/footer-background.png') no-repeat
    top;
  background-size: cover;
  background-size: 100% 100%;

  .container {
    margin-inline: auto;
    max-width: 1440px;
    display: grid;
    gap: 3rem;
    padding: 15em 80px 2em 80px;
  }

  a,
  Link {
    transition: text-shadow 400ms;
  }

  a:hover,
  Link:hover {
    text-shadow: 1px 0;
  }
`;
