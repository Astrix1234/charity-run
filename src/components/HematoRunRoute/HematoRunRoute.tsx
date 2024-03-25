import scss from './HematoRunRoute.module.scss';

import { IconArrow } from '../../Icons/IconArrow/IconArrow';
import { IconBgDeco } from '../../Icons/IconBgDeco/IconBgDeco';

import runRoute from '../../assets/Images/hematoRunRoute/hematoRunRoute.webp';

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
      <IconBgDeco />
    </>
  );
};
