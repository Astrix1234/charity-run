import { useState } from 'react';
import IconHeart from '../../Icons/IconHeart/IconHeart';
import IconHome from '../../Icons/IconHome/IconHome';
import IconPhone from '../../Icons/IconPhone/IconPhone';
import IconUser from '../../Icons/IconUser/IconUser';
import MobileNavLink from '../MobileNavLink/MobileNavLink';
import MobileNavLinkCol from '../MobileNavLinkCol/MobileNavLinkCol';
import scss from './MobileDestinations.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

function MobileDestinations() {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [openCol, setOpenCol] = useState<number | null>(null);
  return (
    <div className={scss.container}>
      <MobileNavLinkCol
        Icon={<IconHome />}
        isOpen={openCol === 0}
        closeCol={() => setOpenCol(null)}
        openCol={() => setOpenCol(0)}
        heading={t.hematoRun}
        links={[
          { name: t.aboutRun, dest: '/' },
          { name: t.gallery, dest: '/' },
          { name: t.timeTable, dest: '/' },
          { name: t.attractions, dest: '/' },
          { name: t.ambassadors, dest: '/' },
          { name: t.partners, dest: '/' },
          { name: t.faq, dest: '/' },
          { name: t.aboutFoundation, dest: '/' },
        ]}
      />
      <MobileNavLinkCol
        Icon={<IconUser />}
        isOpen={openCol === 1}
        closeCol={() => setOpenCol(null)}
        openCol={() => setOpenCol(1)}
        heading={t.participantArea}
        links={[
          { name: t.myProfile, dest: '/' },
          { name: t.runInfo, dest: '/' },
          { name: t.beforeRun, dest: '/' },
          { name: t.logIn, dest: '/' },
        ]}
      />
      <MobileNavLinkCol
        Icon={<IconHeart />}
        isOpen={openCol === 2}
        closeCol={() => setOpenCol(null)}
        openCol={() => setOpenCol(2)}
        heading={t.support}
        links={[
          { name: t.becomeSponsor, dest: '/' },
          { name: t.makeDonation, dest: '/' },
          { name: t.volunteerArea, dest: '/' },
        ]}
      />
      <MobileNavLink heading={t.contact} Icon={<IconPhone />} dest="/contact" />
    </div>
  );
}

export default MobileDestinations;
