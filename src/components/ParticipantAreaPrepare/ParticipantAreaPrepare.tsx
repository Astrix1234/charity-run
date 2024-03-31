import { Link } from 'react-router-dom';
import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import ItemSquare from '../ItemSquare/ItemSquare';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledPrepare id="prepare">
      <ItemSquare heading="" pos={1}>
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
      <ItemSquare heading="" pos={2}>
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
      <ItemSquare heading="" pos={3}>
        <>
          <h1>{t.hydration}</h1>
          <p>
            <Link to="#">{t.hydrationRun}</Link>
          </p>
          <p>{t.hydrationAdvice}</p>
        </>
      </ItemSquare>
      <ItemSquare heading="" pos={4}>
        <>
          <h1>{t.run}</h1>
          <p>
            <Link to="#">{t.runRoute}</Link>
          </p>
        </>
      </ItemSquare>
    </StyledPrepare>
  );
};
