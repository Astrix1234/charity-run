import scss from './HematoRunRoute.module.scss';

import { IconArrow } from '../../Icons/IconArrow/IconArrow';

import runRoute from '../../assets/Images/hematoRunRoute/hematoRunRoute.webp';
import background from '../../assets/Images/hematoRunRoute/hematoRunRouteBackground.webp';

export const HematoRunRoute = () => {
  return (
    <>
      <div className={scss.hematoRunRoute__header}>
        <h2 className={scss.hematoRunRoute__header__text}>Trasa biegu</h2>
        <IconArrow />
      </div>
      <div className={scss.hematoRunRoute__background}>
        <div className={scss.hematoRunRoute__mapContainer}>
          <img
            className={scss.hematoRunRoute__map}
            src={runRoute}
            about="run route"
          />
        </div>
      </div>
    </>
  );
};
