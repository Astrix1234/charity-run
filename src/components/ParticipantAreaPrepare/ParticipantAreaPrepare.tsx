import { Link } from 'react-router-dom';
import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconFoot } from '../../Icons/TimetableIcons/IconFoot/IconFoot';
import { ParticipantAreaItemSquare } from '../ParticipantAreaItemSquare/ParticipantAreaItemSquare';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledPrepare as="section" id="before-run">
      <ParticipantAreaItemSquare pos={1}>
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
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={2}>
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
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={3}>
        <>
          <h1>{t.hydration}</h1>
          <p>
            <Link to="#">{t.hydrationRun}</Link>
          </p>
          <p>{t.hydrationAdvice}</p>
        </>
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={4}>
        <>
          <h1>{t.run}</h1>
          <p>
            <Link to="#">{t.runRoute}</Link>
          </p>
        </>
      </ParticipantAreaItemSquare>
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
