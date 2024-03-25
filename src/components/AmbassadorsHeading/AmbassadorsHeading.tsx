import HandwrittenLine from '../../Icons/HandwrittenLine/HandwrittenLine';
import scss from './AmbassadorsHeading.module.scss';

function AmbassadorsHeading() {
  return (
    <div className={scss.header}>
      <h1 className={scss.heading}>
        <span className={scss.heading__sub}>Poznaj ambasadorów</span>
        <span className={scss.heading__main}>HEMATOBIEGU</span>
      </h1>
      <HandwrittenLine />
    </div>
  );
}

export default AmbassadorsHeading;
