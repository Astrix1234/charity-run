import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: white url('/charity-run/images/footer-background.png') no-repeat
    top;
  background-size: cover;

  .container {
    margin-inline: auto;
    width: clamp(800px, 100vw, 1440px);
    display: grid;
    gap: 3rem;
    padding: 15em 80px 2em 80px;
  }
`;
