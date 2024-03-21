import { StyledSection } from './FooterStyles';
import { Information } from './Information';
import { contactParagraphs, supportParagraphs, usefulLinks } from './text';

export const InformationSection = () => {
  return (
    <StyledSection>
      <Information
        title="Kontakt"
        paragraphs={contactParagraphs}
        mail="kontakt@fundacja.hematologiczna.org"
      />
      <Information title="Wesprzyj" paragraphs={supportParagraphs} />
      <Information title="Przydatne linki" links={usefulLinks} />
      <Information title="Obserwuj nas:" links={{ 'Strona fundacji': '#' }} />
    </StyledSection>
  );
};
