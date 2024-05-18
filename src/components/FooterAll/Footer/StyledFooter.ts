import styled from 'styled-components';

export const StyledFooter = styled.footer`
  .background-top {
    height: 128.5px;
    background: url('images/footer-background-top.png') no-repeat bottom;
    background-size: contain;
    background-size: 100% min(100%, calc(100vw / 7));
  }

  .background-bottom {
    margin-top: -1.5px;
    background: url('../images/footer-background-bottom.png') no-repeat top;
    background-size: contain;
    background-size: 100% 100%;
  }

  .container {
    margin-inline: auto;
    max-width: 1440px;
    display: grid;
    gap: 3rem;
    padding: 1em 80px 2em 80px;
  }

  @media screen and (max-width: 1359px) {
    background-size: 100% 100%;
    .container {
      padding-inline: 20px;
    }
  }

  a,
  Link,
  li {
    transition: text-shadow 400ms;
  }

  a:hover,
  Link:hover,
  li:hover {
    text-shadow: 1px 0;
  }
`;
