import { NavigationHeader } from '../Navigation-header/Navigation-header';
import { FoundationLogo } from '../../Share/FoundationLogo/FoundationLogo';
import { IconInstagram } from '../../../Icons/IconInstagram/IconInstagram';
import { IconFacebook } from '../../../Icons/IconFacebook/IconFacebook';
import { ButtonPlEng } from '../ButtonPlEng/ButtonPlEng';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import scss from './DesktopHeader.module.scss';
import SignUpButton from '../SignUpButton/SignUpButton';

function DesktopHeader() {
  const { toggleLanguage } = useLanguageStore();

  return (
    <header className={scss.header}>
      <div className={scss.header__container}>
        <FoundationLogo />
        <NavigationHeader />
        <SignUpButton />
        <div className={scss.header__icons}>
          <IconFacebook />
          <IconInstagram />
        </div>
        <div className={scss.header__language}>
          <ButtonPlEng onClick={toggleLanguage} />
        </div>
      </div>
    </header>
  );
}

export default DesktopHeader;
