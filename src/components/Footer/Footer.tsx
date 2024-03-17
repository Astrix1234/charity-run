import styled from 'styled-components';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';

const StyledFooter = styled.footer`
  .footer__container {
    margin-inline: auto;
    width: 1400px;
    position: relative;
    display: grid;
    gap: 5rem;
    padding: 10rem 3rem 0;

    &__header {
      display: flex;
      align-items: center;
      gap: 3rem;

      & h2 {
        font-size: 2.5rem;
        font-weight: 400;
        line-height: 3.5rem;
        color: white;
      }
    }

    &__main {
      display: flex;
      gap: 3rem;

      a {
        text-decoration: underline;
      }

      & section {
        min-width: 12rem;
      }

      & p {
        padding-block: 1rem;
      }

      & h3 {
        color: white;
        margin-bottom: 1rem;
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

  svg {
    position: absolute;
    top: 0;
    z-index: -1;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter as="footer">
      <div className="footer__container">
        <header className="footer__container__header">
          <FoundationLogo />
          <h2>
            FUNDACJA NA RZECZ POMOCY
            <br />
            <strong>CHORYM NA BIAŁACZKI</strong>
          </h2>
        </header>
        <main className="footer__container__main">
          <section className="footer__container__main__kontakt">
            <h3>Kontakt</h3>
            <p>
              Adres:
              <br />
              93-513 Łódź,
              <br />
              ul. Pabianicka 62
            </p>
            <p>E-mail:</p>
            <a href="#">kontakt@fundacja.hematologiczna.org</a>
          </section>
          <section className="footer__container__main__wesprzyj">
            <h3>Wesprzyj</h3>
            <p>Konto bankowe</p>
            <p>
              PKO BP:
              <br />
              31 1020 3352 0000 1202 0241 5990
            </p>
            <p>Dopisek: "Darowizna na cele statutowe" KRS: 0000069531</p>
            <p>NIP: 729-23-25-734</p>
          </section>
          <section className="footer__container__main__linki">
            <h3>Przydatne linki</h3>
            <p>O fundacja</p>
            <p>Strefa uczestnika</p>
            <p>Wolontariat</p>
          </section>
          <section className="footer__container__main__obserwuj">
            <h3>Obserwuj nas</h3>
            <div className="footer__container__main__obserwuj__strona-fundacji">
              <img></img>
              <a href="#">Strona Fundacji</a>
            </div>
            <div className="footer__container__main__obserwuj__social-media">
              <p>F</p>
              <p>I</p>
              <p>Y</p>
              <p>L</p>
            </div>
          </section>
        </main>
        <footer className="footer__container__footer">
          <a href="#">Regulamin</a>
          <a href="#">Rodo</a>
          <a href="#">Polityka prywatności</a>
          <a href="#">Wszelkie prawa zastrzeżone</a>
        </footer>
        <svg
          width="1400"
          height="800"
          viewBox="0 0 1400 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 68.9002C0 68.9002 112.5 0 345 0C646 -0.00102728 713 128.337 1021.5 128.337C1228.5 128.337 1440 68.9002 1440 68.9002V800H0V68.9002Z"
            fill="url(#paint0_linear_7_2702)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7_2702"
              x1="752"
              y1="55.682"
              x2="1068.26"
              y2="932.64"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#20A5AA" />
              <stop offset="0.927158" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </StyledFooter>
  );
};
