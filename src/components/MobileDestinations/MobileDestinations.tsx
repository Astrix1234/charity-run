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

type MobileDestinationsProps = {
  handleClose: () => void;
};

function MobileDestinations({ handleClose }: MobileDestinationsProps) {
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
        handleClose={handleClose}
        links={[
          { name: t.aboutRun, dest: '/charity-run' },
          { name: t.gallery, dest: '/charity-run#gallery' },
          { name: t.timeTable, dest: '/charity-run#timetable' },
          { name: t.attractions, dest: '/charity-run#attractions' },
          { name: t.ambassadors, dest: '/charity-run/our-ambassadors' },
          { name: t.partners, dest: '/charity-run#sponsors' },
          { name: t.faq, dest: '/charity-run#faq' },
          {
            name: t.aboutFoundation,
            dest: 'https://fundacja.hematologiczna.org/',
            newPage: true,
          },
        ]}
      />
      <MobileNavLinkCol
        Icon={<IconUser />}
        isOpen={openCol === 1}
        closeCol={() => setOpenCol(null)}
        openCol={() => setOpenCol(1)}
        heading={t.participantArea}
        handleClose={handleClose}
        links={[
          { name: t.myProfile, dest: '/participant-area' },
          { name: t.runInfo, dest: '/participant-area#run-info' },
          { name: t.beforeRun, dest: '/participant-area#before-run' },
          { name: t.logIn, dest: '/login' },
        ]}
      />
      <MobileNavLinkCol
        Icon={<IconHeart />}
        isOpen={openCol === 2}
        closeCol={() => setOpenCol(null)}
        openCol={() => setOpenCol(2)}
        heading={t.support}
        handleClose={handleClose}
        links={[
          { name: t.becomeSponsor, dest: '/support-sponsors' },
          { name: t.makeDonation, dest: '/support-donation' },
          { name: t.volunteerArea, dest: '/support-volunteers' },
        ]}
      />
      <MobileNavLink
        handleClose={handleClose}
        heading={t.contact}
        Icon={<IconPhone />}
        dest="/contact"
      />
    </div>
  );
}

export default MobileDestinations;
