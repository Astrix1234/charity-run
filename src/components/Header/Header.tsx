import { NavigationHeader } from '../Navigation-header/Navigation-header';
import { Button } from '../Button/Button';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';
import { IconInstagram } from '../../Icons/IconInstagram/IconInstagram';
import { IconFacebook } from '../../Icons/IconFacebook/IconFacebook';
import { ButtonPlEng } from '../ButtonPlEng/ButtonPlEng';
import scss from './Header.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const Header = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const t = translations[language];

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <header className={scss.header}>
      <div className={scss.header__container}>
        <FoundationLogo />
        <NavigationHeader />
        <Button onClick={handleClick} content={t.signUp} />
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
};
