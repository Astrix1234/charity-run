import styled from 'styled-components';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';

const StyledFooter = styled.footer`
  .footer__container {
    margin-inline: auto;
    width: 1400px;
    position: relative;

    &__header {
      display: flex;
      align-items: center;
      gap: 3rem;
      padding: 10rem 8rem;
    }
    &__header h2 {
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 3.5rem;
      color: white;
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
