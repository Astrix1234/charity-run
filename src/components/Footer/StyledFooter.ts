import styled from 'styled-components';

export const StyledFooter = styled.footer`
  .background-top {
    height: 128.5px;
    background: url('images/footer-background-top.png') no-repeat bottom;
    background-size: contain;
    background-size: 100% 100%;
  }

  .background-bottom {
    background: url('images/footer-background-bottom.png') no-repeat top;
    background-size: contain;
    background-size: 100% 100%;
  }

  .container {
    margin-inline: auto;
    max-width: 1440px;
    display: grid;
    gap: 3rem;
    padding: 15em 80px 2em 80px;
  }

  @media screen and (max-width: 600px) {
    background-size: 100% 100%;
    .container {
      padding-inline: 20px;
    }
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
