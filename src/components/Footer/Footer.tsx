import { StyledFooter } from './StyledFooter';
import { FoundationLogotype } from '../FoundationLogotype/FoundationLogotype';
import { FooterInformationSection } from '../FooterInformationSection/FooterInformationSection';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <div className="background-top"></div>
      <div className="background-bottom">
        <div className="container">
          <img src="images/foundation-logotype.png" alt="Foundation Logotype" />
          <FooterInformationSection />
          <FooterNavigation />
        </div>
      </div>
    </StyledFooter>
  );
};
