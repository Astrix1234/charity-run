import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-inline: auto;
  max-width: 1400px;
  position: relative;
  display: grid;
  gap: 3rem;
  padding: 9.2rem 5rem 0;
`;

export const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 28.5% 29% 20.5% 1fr;
  gap: 2rem;
  white-space: nowrap;
  margin-bottom: 1.35em;

  h3 {
    color: white;
    margin-bottom: 2.4rem;
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }

  p {
    padding-bottom: 0.33em;
  }
`;

export const StyledContact = styled.div`
  p {
    padding-left: 0.2em;
  }

  .address {
    margin-bottom: 0.5em;
  }

  .mail {
    text-decoration-line: underline;
  }
`;

export const StyledSupport = styled.div`
  .bank {
    padding-bottom: 1.8em;
  }

  .account {
    padding-bottom: 1.3em;
  }

  .footnote {
    padding-bottom: 1em;
  }
`;

export const StyledLinks = styled.div`
  p {
    padding-bottom: 1.1em;
  }
`;

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

export const StyledNavigation = styled.ul`
  display: flex;
  gap: 8.2rem;
  justify-content: center;
  font-size: 1.25em;
`;

export const StyledLogotype = styled.div`
  display: flex;
  align-items: center;
  gap: 3.8rem;
  padding-left: 1.4rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3.8rem;
    letter-spacing: 0.04rem;
    color: white;
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  place-items: center;
  img {
    position: relative;
    width: 95px;
    height: 95px;
  }

  &::before {
    position: absolute;
    content: '';
    background-color: white;
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
`;

export const StyledBackground = styled.svg`
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const StyledGlobe = styled.svg`
  position: absolute;
  left: -0.55em;
  top: 0.2em;
`;
