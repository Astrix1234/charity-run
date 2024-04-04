import { Link } from 'react-router-dom';
import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import ItemSquare from '../ItemSquare/ItemSquare';
import { IconFoot } from '../../Icons/TimetableIcons/IconFoot/IconFoot';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledPrepare as="section" id="before-run">
      <ItemSquare pos={1}>
        <>
          <h1>{t.train}</h1>
          <p>{t.trainLinks}</p>
          <p>
            <Link to="#">{t.trainPlans}</Link>
          </p>
          <p>
            <Link to="#">{t.trainStart}</Link>
          </p>
        </>
      </ItemSquare>
      <ItemSquare pos={2}>
        <>
          <h1>{t.diet}</h1>
          <p>{t.dietLinks}</p>
          <p>
            <Link to="#">{t.dietEat}</Link>
          </p>
          <p>
            <Link to="#">{t.dietRunner}</Link>
          </p>
        </>
      </ItemSquare>
      <ItemSquare pos={3}>
        <>
          <h1>{t.hydration}</h1>
          <p>
            <Link to="#">{t.hydrationRun}</Link>
          </p>
          <p>{t.hydrationAdvice}</p>
        </>
      </ItemSquare>
      <ItemSquare pos={4}>
        <>
          <h1>{t.run}</h1>
          <p>
            <Link to="#">{t.runRoute}</Link>
          </p>
        </>
      </ItemSquare>
      <div className="foots foot0">
        <IconFoot />
      </div>
      <div className="foots foot1">
        <IconFoot />
      </div>
      <div className="foots foot2">
        <IconFoot />
      </div>
      <div className="foots foot3">
        <IconFoot />
      </div>
    </StyledPrepare>
  );
};
