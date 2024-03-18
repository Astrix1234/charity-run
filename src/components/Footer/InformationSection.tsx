import styled from 'styled-components';
import { Information } from './Information';

const StyledSection = styled.div`
  display: flex;
  gap: 4rem;
`;

const contactParagraphs = [
  'Adres',
  '93-513 Łódź',
  'ul. Pabianicka 62',
  'E-mail:',
];

const supportParagraphs = [
  'Konto bankowe',
  'PKO BP:',
  '31 1020 3352 0000 1202 0241 5990',
  'Dopisek: "Darowizna na cele statutowe"',
  'KRS: 0000069531',
  'NIP: 729-23-25-734',
];

const usefulLinks = {
  'O fundacji': '#',
  'Strefa uczestnika': '#',
  Wolontariat: '#',
};

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
