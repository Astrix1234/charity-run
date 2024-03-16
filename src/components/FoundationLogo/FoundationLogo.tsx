import { Link } from 'react-router-dom';
import scss from './FoundationLogo.module.scss';

export const FoundationLogo = () => {
  return (
    <>
      <Link className={scss.foundationLogo} to="/">
        <div className={scss.foundationLogo__logo}></div>
      </Link>
    </>
  );
};
