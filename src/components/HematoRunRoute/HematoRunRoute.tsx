import scss from './HematoRunRoute.module.scss';

import { IconCreamyBg } from '../../Icons/IconCreamyBg/IconCreamyBg';

export const HematoRunRoute = () => {
  return (
    <>
      <div className={scss.hematoRunRoute}>
        <h2 className={scss.hematoRunRoute__header}>Trasa biegu</h2>
        <IconCreamyBg />
      </div>
    </>
  );
};
