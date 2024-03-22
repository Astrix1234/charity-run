import { StyledContact } from './StyledFooterContact';

export const FooterContact = () => {
  return (
    <StyledContact>
      <h3>Kontakt</h3>
      <div className="address">
        <p>Adres</p>
        <p>93-513 Łódź</p>
        <p>ul. Pabianicka 62</p>
      </div>
      <p>E-mail:</p>
      <p className="mail">
        <a href="mailto:kontakt@fundacja.hematologiczna.org">
          kontakt@fundacja.hematologiczna.org
        </a>
      </p>
    </StyledContact>
  );
};
