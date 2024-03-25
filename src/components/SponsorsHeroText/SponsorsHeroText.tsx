import CurvedArrowDonwLeft from '../../Icons/CurvedArrowDownLeft/CurvedArrowDonwLeft';
import HandwrittenLineMini from '../../Icons/HandwrittenLineMini/HandwrittenLineMini';
import scsss from './SponsorsHeroText.module.scss';

function SponsorsHeroText() {
  return (
    <div className={scsss.container}>
      <p className={scsss.text}>
        Chcemy z całego serca podziękować Wam za Wasze wsparcie <br /> i
        zaangażowanie w organizację tego wyjątkowego wydarzenia. Wasza hojność i
        <br />
        wsparcie finansowe sprawiły, że{' '}
        <span className={scsss.underline}>
          Hematobieg
          <HandwrittenLineMini />
        </span>{' '}
        stał się możliwy,
        <br /> a jego cel jeszcze bardziej osiągalny.
      </p>
      <p className={scsss.text}>
        Dzięki Waszemu wsparciu będziemy w stanie pomóc tym, którzy tego
        potrzebują,
        <br /> zwiększając świadomość na temat chorób krwi oraz wspierając
        badania i leczenie w<br /> tym obszarze. Wasza dobroczynność naprawdę
        czyni różnicę i daje nadzieję tysiącom osób.
      </p>
      <CurvedArrowDonwLeft />
    </div>
  );
}

export default SponsorsHeroText;
