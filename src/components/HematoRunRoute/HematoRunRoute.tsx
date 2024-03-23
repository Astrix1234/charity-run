import scss from './HematoRunRoute.module.scss';

import { IconCreamyBg } from '../../Icons/IconCreamyBg/IconCreamyBg';
import { IconArrow } from '../../Icons/IconArrow/IconArrow';

export const HematoRunRoute = () => {
  return (
    <>
      <div className={scss.hematoRunRoute}>
        <div className={scss.hematoRunRoute__header}>
          <h2 className={scss.hematoRunRoute__header__text}>Trasa biegu</h2>
          <IconArrow />
        </div>
        <div className={scss.hematoRunRoute__map}></div>
        <IconCreamyBg />
      </div>
    </>
  );
};
