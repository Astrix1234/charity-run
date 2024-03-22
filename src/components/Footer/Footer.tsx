import { StyledFooter } from './StyledFooter';
import { FoundationLogotype } from '../FoundationLogotype/FoundationLogotype';
import { FooterInformationSection } from '../FooterInformationSection/FooterInformationSection';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <div className="container">
        <FoundationLogotype />
        <FooterInformationSection />
        <FooterNavigation />
      </div>
    </StyledFooter>
  );
};
