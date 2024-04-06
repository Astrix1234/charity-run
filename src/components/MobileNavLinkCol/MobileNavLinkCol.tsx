import { Link } from 'react-router-dom';
import ChevronLeft from '../../Icons/ChevronLeft/ChevronLeft';
import scss from './MobileNavLinkCol.module.scss';
import { ReactNode } from 'react';

type MobileNavLinkColProps = {
  Icon: ReactNode;
  heading: string;
  isOpen: boolean;
  closeCol: () => void;
  openCol: () => void;
  links: { name: string; dest: string }[];
};

function MobileNavLinkCol({
  isOpen,
  heading,
  Icon,
  closeCol,
  openCol,
  links,
}: MobileNavLinkColProps) {
  function toggleOpen() {
    if (isOpen) {
      closeCol();
    } else {
      openCol();
    }
  }

  return (
    <div className={scss.container}>
      <button
        onClick={toggleOpen}
        className={`${scss.heading} ${isOpen ? scss.heading__open : ''}`}
      >
        <span className={scss.text}>
          {Icon}
          <span>{heading}</span>
        </span>
        <ChevronLeft />
      </button>
      <div className={`${scss.box} ${isOpen ? scss.box__open : ''}`}>
        <div className={scss.col}>
          {links.map((link, i) => (
            <Link className={scss.item} key={i} to={link.dest}>
              <div className={scss.item__line} />
              <span className={scss.item__text}>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNavLinkCol;
