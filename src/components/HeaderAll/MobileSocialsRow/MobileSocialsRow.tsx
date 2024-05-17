import { IconFacebook } from '../../../Icons/IconFacebook/IconFacebook';
import { IconInstagram } from '../../../Icons/IconInstagram/IconInstagram';
import scss from './MobileSocialsRow.module.scss';

function MobileSocialsRow() {
  return (
    <div className={scss.container}>
      <IconFacebook />
      <IconInstagram />
    </div>
  );
}

export default MobileSocialsRow;
