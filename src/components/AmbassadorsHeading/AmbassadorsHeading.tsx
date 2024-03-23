import HandwrittenLine from '../HandwrittenLine/HandwrittenLine';
import scss from './AmbassadorsHeading.module.scss';

function AmbassadorsHeading() {
  return (
    <header className={scss.header}>
      <h1 className={scss.heading}>
        <span className={scss.heading__sub}>Poznaj ambasadorów</span>
        <span className={scss.heading__main}>HEMATOBIEGU</span>
      </h1>
      <HandwrittenLine />
    </header>
  );
}

export default AmbassadorsHeading;
