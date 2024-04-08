import { useEffect, useState } from 'react';
import scss from './MobileHeader.module.scss';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function MobileHeader() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  function handleClose() {
    setIsNavOpen(false);
  }

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavOpen]);

  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.box}>
          <button
            onClick={() => setIsNavOpen(prev => !prev)}
            aria-label="Toggle Mobile Navigation"
            className={`${scss.btn} ${isNavOpen ? scss.btn__active : ''}`}
          >
            <span />
          </button>
          <MobileNavigation handleClose={handleClose} open={isNavOpen} />
        </div>
      </div>
    </header>
  );
}

export default MobileHeader;
