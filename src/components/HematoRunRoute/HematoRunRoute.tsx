import scss from './HematoRunRoute.module.scss';

import { IconArrow } from '../../Icons/IconArrow/IconArrow';

import runRoute from '../../assets/Images/hematoRunRoute/hematoRunRoute.webp';

export const HematoRunRoute = () => {
  return (
    <>
      <div className={scss.hematoRunRoute}>
        <div className={scss.hematoRunRoute__header}>
          <h2 className={scss.hematoRunRoute__header__text}>Trasa biegu</h2>
          <IconArrow />
        </div>
        <div className={scss.hematoRunRoute__container}>
          <img
            src={runRoute}
            about="run route"
            className={scss.hematoRunRoute__map}
          />
        </div>
      </div>
    </>
  );
};
