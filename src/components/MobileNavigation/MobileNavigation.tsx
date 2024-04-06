import { useState } from 'react';
import MobileNavLinkCol from '../MobileNavLinkCol/MobileNavLinkCol';
import scss from './MobileNavigation.module.scss';
import IconHome from '../../Icons/IconHome/IconHome';
import IconUser from '../../Icons/IconUser/IconUser';
import IconHeart from '../../Icons/IconHeart/IconHeart';
import IconPhone from '../../Icons/IconPhone/IconPhone';
import MobileNavLink from '../MobileNavLink/MobileNavLink';

type MobileNavigationProps = {
  open: boolean;
};

function MobileNavigation({ open }: MobileNavigationProps) {
  const [openCol, setOpenCol] = useState<number | null>(null);
  console.log(openCol);

  if (!open) return null;
  return (
    <>
      <div
        className={`${scss.background} ${open ? scss.background__open : ''}`}
      />
      <div className={scss.container}>
        <div className={scss.nav}>
          <MobileNavLinkCol
            Icon={<IconHome />}
            isOpen={openCol === 0}
            closeCol={() => setOpenCol(null)}
            openCol={() => setOpenCol(0)}
            heading="Hematobieg"
            links={[
              { name: 'Informacje o biegu', dest: '/' },
              { name: 'Galeria', dest: '/' },
              { name: 'Rozkład Jazdy', dest: '/' },
              { name: 'Atrakcje', dest: '/' },
              { name: 'Ambasadorzy i Liderzy', dest: '/' },
              { name: 'Partnerzy i Sponsorzy', dest: '/' },
              { name: 'FAQ', dest: '/' },
              { name: 'O Fundacji', dest: '/' },
            ]}
          />
          <MobileNavLinkCol
            Icon={<IconUser />}
            isOpen={openCol === 1}
            closeCol={() => setOpenCol(null)}
            openCol={() => setOpenCol(1)}
            heading="Strefa Uczestnika"
            links={[
              { name: 'Mój Profil', dest: '/' },
              { name: 'Informacje o Biegu', dest: '/' },
              { name: 'Trening przed Biegiem', dest: '/' },
              { name: 'Zaloguj się', dest: '/' },
            ]}
          />
          <MobileNavLinkCol
            Icon={<IconHeart />}
            isOpen={openCol === 2}
            closeCol={() => setOpenCol(null)}
            openCol={() => setOpenCol(2)}
            heading="Wesprzyj "
            links={[
              { name: 'Zostań sponsorem', dest: '/' },
              { name: 'Wpłać darowiznę', dest: '/' },
              { name: 'Strefa wolontariuszy', dest: '/' },
            ]}
          />
          <MobileNavLink
            heading="Kontakt"
            Icon={<IconPhone />}
            dest="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default MobileNavigation;
