import styled from 'styled-components';
import { Background } from './Background';
import { FoundationLogotype } from './FoundationLogotype';
import { InformationSection } from './InformationSection';

const StyledFooter = styled.footer`
  .footer__container {
    margin-inline: auto;
    width: 1400px;
    position: relative;
    display: grid;
    gap: 5rem;
    padding: 10rem 3rem 0;

    &__main {
      display: flex;
      gap: 3rem;

      a {
        text-decoration: underline;
      }

      & section {
        min-width: 12rem;
      }

      &__obserwuj {
        &__strona-fundacji {
        }

        &__social-media {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }
      }
    }

    &__footer {
      display: flex;
      gap: 8rem;
      justify-content: center;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <div className="footer__container">
        <FoundationLogotype />
        <InformationSection />
        <footer className="footer__container__footer">
          <a href="#">Regulamin</a>
          <a href="#">Rodo</a>
          <a href="#">Polityka prywatności</a>
          <a href="#">Wszelkie prawa zastrzeżone</a>
        </footer>
        <Background />
      </div>
    </StyledFooter>
  );
};
