import { StyledSection } from './FooterStyles';
import { InfoContact } from './InfoContact';
import { InfoSupport } from './InfoSupport';
import { InfoLinks } from './InfoLinks';
import { InfoFollow } from './InfoFollow';

export const InformationSection = () => {
  return (
    <StyledSection>
      <InfoContact />
      <InfoSupport />
      <InfoLinks />
      <InfoFollow />
    </StyledSection>
  );
};
