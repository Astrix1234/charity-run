import { Link } from 'react-router-dom';
import scss from './FoundationLogo.module.scss';

type FoundationLogoProps = {
  additonalActions?: () => void;
};

export const FoundationLogo = ({ additonalActions }: FoundationLogoProps) => {
  return (
    <>
      <Link
        className={scss.foundationLogo}
        to="/"
        onClick={() => additonalActions?.()}
      >
        <div className={scss.foundationLogo__logo}></div>
      </Link>
    </>
  );
};
