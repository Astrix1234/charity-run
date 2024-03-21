import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-inline: auto;
  max-width: 1400px;
  position: relative;
  display: grid;
  gap: 2.9rem;
  padding: 9.25rem 5rem 0;
`;

export const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 31% 31.5% 23.2% 1fr;

  margin-bottom: 2rem;
  h3 {
    color: white;
    margin-bottom: 2.5rem;
    font-size: 1.45rem;
    font-weight: 500;
    letter-spacing: 0.02rem;
  }

  p {
    padding-left: 0.2rem;
    padding-bottom: 1rem;
    line-height: 1.9;
  }
`;

export const StyledContact = styled.div``;
export const StyledSupport = styled.div``;
export const StyledLinks = styled.div``;
export const StyledFollow = styled.div``;

export const StyledNavigation = styled.ul`
  display: flex;
  gap: 8rem;
  justify-content: center;
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
