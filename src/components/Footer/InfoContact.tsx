import { StyledInfo } from './FooterStyles';

export const InfoContact = () => {
  return (
    <StyledInfo>
      <h3>Kontakt</h3>
      <p>
        Adres
        <br />
        93-513 Łódź
        <br />
        ul. Pabianicka 62
      </p>
      <p>E-mail:</p>
      <a href="mailto:kontakt@fundacja.hematologiczna.org">
        kontakt@fundacja.hematologiczna.org
      </a>
    </StyledInfo>
  );
};
