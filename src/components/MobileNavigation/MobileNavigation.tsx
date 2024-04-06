import scss from './MobileNavigation.module.scss';
import SignUpButton from '../SignUpButton/SignUpButton';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';
import MobileLanguageSwitcher from '../MobileLanguageSwitcher/MobileLanguageSwitcher';
import MobileSocialsRow from '../MobileSocialsRow/MobileSocialsRow';
import MobileDestinations from '../MobileDestinations/MobileDestinations';

type MobileNavigationProps = {
  open: boolean;
};

function MobileNavigation({ open }: MobileNavigationProps) {
  if (!open) return null;
  return (
    <>
      <div
        className={`${scss.background} ${open ? scss.background__open : ''}`}
      />
      <div className={scss.container}>
        <div className={scss.col}>
          <FoundationLogo />
          <MobileDestinations />
          <SignUpButton />
          <MobileLanguageSwitcher />
        </div>
        <MobileSocialsRow />
      </div>
    </>
  );
}

export default MobileNavigation;
