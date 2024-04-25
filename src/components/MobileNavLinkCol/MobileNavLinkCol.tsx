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
  links: {
    name: string;
    dest: string;
    newPage?: boolean;
    disabled?: boolean;
    handleClick?: (e: React.MouseEvent) => void;
  }[];
  handleClose: () => void;
};

function MobileNavLinkCol({
  isOpen,
  heading,
  Icon,
  closeCol,
  openCol,
  links,
  handleClose,
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
          {links.map((link, i) =>
            !link.dest ? (
              <button
                className={`${scss.item} ${
                  link.disabled ? scss.item__disabled : scss.item__enabled
                }`}
                type="button"
                onClick={!link.disabled ? link.handleClick : undefined}
                key={i}
              >
                <span className={scss.item__line} />
                <span className={scss.item__text}>{link.name}</span>
              </button>
            ) : link.disabled ? (
              <p className={`${scss.item} ${scss.item__disabled}`} key={i}>
                {' '}
                <span className={scss.item__line} />
                <span className={scss.item__text}>{link.name}</span>
              </p>
            ) : (
              <Link
                onClick={handleClose}
                className={`${scss.item} ${scss.item__enabled}`}
                key={i}
                to={link.dest}
                target={link.newPage ? '_blank' : '_self'}
              >
                <span className={scss.item__line} />
                <span className={scss.item__text}>{link.name}</span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileNavLinkCol;
