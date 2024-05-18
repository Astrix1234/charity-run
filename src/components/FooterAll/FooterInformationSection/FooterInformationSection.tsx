import { StyledSection } from './StyledFooterInfortmationSection';
import { FooterContact } from '../FooterContact/FooterContact';
import { FooterSupport } from '../FooterSupport/FooterSupport';
import { FooterLinks } from '../FooterLinks/FooterLinks';
import { FooterFollow } from '../FooterFollow/FooterFollow';

export const FooterInformationSection = () => {
  return (
    <StyledSection>
      <FooterContact />
      <FooterSupport />
      <FooterLinks />
      <FooterFollow />
    </StyledSection>
  );
};
