import styled from 'styled-components';

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
