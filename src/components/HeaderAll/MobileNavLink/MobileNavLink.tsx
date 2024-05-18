import { Link } from 'react-router-dom';
import scss from './MobileNavLink.module.scss';
import { ReactNode } from 'react';

type MobileNavLinkProps = {
  dest: string;
  heading: string;
  Icon: ReactNode;
  handleClose: () => void;
};

function MobileNavLink({
  dest,
  heading,
  Icon,
  handleClose,
}: MobileNavLinkProps) {
  return (
    <Link onClick={handleClose} className={scss.link} to={dest}>
      {Icon}
      <span>{heading}</span>
    </Link>
  );
}

export default MobileNavLink;
