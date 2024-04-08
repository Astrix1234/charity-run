import scss from './MobileNavigation.module.scss';
import SignUpButton from '../SignUpButton/SignUpButton';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';
import MobileLanguageSwitcher from '../MobileLanguageSwitcher/MobileLanguageSwitcher';
import MobileSocialsRow from '../MobileSocialsRow/MobileSocialsRow';
import MobileDestinations from '../MobileDestinations/MobileDestinations';

type MobileNavigationProps = {
  open: boolean;
  handleClose: () => void;
};

function MobileNavigation({ open, handleClose }: MobileNavigationProps) {
  if (!open) return null;
  return (
    <>
      <div
        className={`${scss.background} ${open ? scss.background__open : ''}`}
      />
      <div className={scss.container}>
        <div className={scss.col}>
          <FoundationLogo />
          <MobileDestinations handleClose={handleClose} />
          <SignUpButton additionalAction={handleClose} />
          <MobileLanguageSwitcher />
        </div>
        <MobileSocialsRow />
      </div>
    </>
  );
}

export default MobileNavigation;
