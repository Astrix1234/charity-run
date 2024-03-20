import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-inline: auto;
  width: 1400px;
  position: relative;
  display: grid;
  gap: 5rem;
  padding: 10rem 3rem 0;
`;

export const StyledInformation = styled.div`
  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    padding-block: 0.5rem;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  gap: 4rem;
`;

export const StyledNavigation = styled.ul`
  display: flex;
  gap: 8rem;
  justify-content: center;
`;

export const StyledLogotype = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3.5rem;
    color: white;
  }
`;

export const StyledBackground = styled.svg`
  position: absolute;
  top: 0;
  z-index: -1;
`;
