import styled from 'styled-components';
import { Information } from './Information';
import { contactParagraphs, supportParagraphs, usefulLinks } from './text';

const StyledSection = styled.div`
  display: flex;
  gap: 4rem;
`;

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
      <Information title="Obserwuj nas" links={{ 'Strona fundacji': '#' }} />
    </StyledSection>
  );
};
