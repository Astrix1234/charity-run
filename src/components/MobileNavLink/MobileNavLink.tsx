import { Link } from 'react-router-dom';
import scss from './MobileNavLink.module.scss';
import { ReactNode } from 'react';

type MobileNavLinkProps = {
  dest: string;
  heading: string;
  Icon: ReactNode;
};

function MobileNavLink({ dest, heading, Icon }: MobileNavLinkProps) {
  return (
    <Link className={scss.link} to={dest}>
      {Icon}
      <span>{heading}</span>
    </Link>
  );
}

export default MobileNavLink;
