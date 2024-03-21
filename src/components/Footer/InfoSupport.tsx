import { StyledSupport } from './FooterStyles';

export const InfoSupport = () => {
  return (
    <StyledSupport>
      <h3>Wesprzyj</h3>
      <p className="bank">Konto bankowe</p>
      <div className="account">
        <p>PKO BP:</p>
        <p>31 1020 3352 0000 1202 0241 5990</p>
      </div>
      <div className="footnote">
        <p>Dopisek: "Darowizna na cele statutowe"</p>
        <p>KRS: 0000069531</p>
      </div>
      <p>NIP: 729-23-25-734</p>
    </StyledSupport>
  );
};
