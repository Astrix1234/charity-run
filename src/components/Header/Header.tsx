import { NavigationHeader } from '../Navigation-header/Navigation-header';
import { Button } from '../Button/Button';
import { FoundationLogo } from '../FoundationLogo/FoundationLogo';
import scss from './Header.module.scss';

export const Header = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <header className={scss.header}>
      <div className={scss.header__container}>
        <FoundationLogo />
        <NavigationHeader />
        <Button onClick={handleClick} content="Zapisz się" />
      </div>
    </header>
  );
};
