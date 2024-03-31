import { NavigationHeader } from '../Navigation-header/Navigation-header';
import { Button } from '../Button/Button';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';
import { IconInstagram } from '../../Icons/IconInstagram/IconInstagram';
import { IconFacebook } from '../../Icons/IconFacebook/IconFacebook';
import { ButtonPlEng } from '../ButtonPlEng/ButtonPlEng';
import scss from './Header.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { useNavigate } from 'react-router';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';

export const Header = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { isLogin } = useIsLoginStore();
  const t = translations[language];
  const navigate = useNavigate();

  const handleClick = () => {
    isLogin ? navigate('/run-registration') : navigate('/login');
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
