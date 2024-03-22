import { StyledLogotype } from './StyledFoundationLogotype';
import { FoundationLogoCircle } from '../FoundationLogoCircle/FoundationLogoCircle';

export const FoundationLogotype = () => {
  return (
    <StyledLogotype>
      <FoundationLogoCircle />
      <h2>
        FUNDACJA NA RZECZ POMOCY
        <br />
        <strong>CHORYM NA BIAŁACZKI</strong>
      </h2>
    </StyledLogotype>
  );
};
