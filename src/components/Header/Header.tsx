import { NavigationHeader } from '../Navigation-header/Navigation-header';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.header__container}>
        <NavigationHeader />
      </div>
    </header>
  );
};
