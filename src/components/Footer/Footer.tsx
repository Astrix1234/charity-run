import { StyledFooter } from './FooterStyles';
import { Background } from './Background';
import { FoundationLogotype } from './FoundationLogotype';
import { InformationSection } from './InformationSection';
import { NavigationFooter } from './NavigationFooter';

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <FoundationLogotype />

      <InformationSection />
      <NavigationFooter />
      <Background />
    </StyledFooter>
  );
};
