import { Link } from 'react-router-dom';
import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import ItemSquare from '../ItemSquare/ItemSquare';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledPrepare>
      <ItemSquare heading="" pos={1}>
        <>
          <h1>{t.train}</h1>
          <p>{t.trainLinks}</p>
          <Link to="#">{t.trainPlans}</Link>
          <Link to="#">{t.trainStart}</Link>
        </>
      </ItemSquare>
      <ItemSquare heading="" pos={2}>
        <>
          <h1>{t.diet}</h1>
          <p>{t.dietLinks}</p>
          <Link to="#">{t.dietEat}</Link>
          <Link to="#">{t.dietRunner}</Link>
        </>
      </ItemSquare>
      <ItemSquare heading="" pos={3}>
        <>
          <h1>{t.hydration}</h1>
          <Link to="#">{t.hydrationRun}</Link>
          <p>{t.hydrationAdvice}</p>
        </>
      </ItemSquare>
      <ItemSquare heading="" pos={4}>
        <>
          <h1>{t.run}</h1>
          <Link to="#">{t.runRoute}</Link>
        </>
      </ItemSquare>
    </StyledPrepare>
  );
};
