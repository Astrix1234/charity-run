import styled from 'styled-components';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';

const StyledLogotype = styled.div`
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

export const FoundationLogotype = () => {
  return (
    <StyledLogotype>
      <FoundationLogo />
      <h2>
        FUNDACJA NA RZECZ POMOCY
        <br />
        <strong>CHORYM NA BIAŁACZKI</strong>
      </h2>
    </StyledLogotype>
  );
};
