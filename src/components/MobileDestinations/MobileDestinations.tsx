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
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { logout } from '../../Zustand/api';
import { useNavigate } from 'react-router-dom';

type MobileDestinationsProps = {
  handleClose: () => void;
};

function MobileDestinations({ handleClose }: MobileDestinationsProps) {
  const { isLogin, setIsLogin } = useIsLoginStore();
  const { language } = useLanguageStore();
  const t = translations[language];
  const [openCol, setOpenCol] = useState<number | null>(null);
  const { setIsLoading } = useIsLoadingStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    const logoutUser = async () => {
      try {
        setIsLoading(true);
        await logout();
        setIsLogin(false);
        navigate('/');
      } catch (error) {
        console.error('Error logging out:', error);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLogin(false);
    logoutUser();
  };

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
          { name: t.aboutRun, dest: '/' },
          { name: t.gallery, dest: '/#gallery' },
          { name: t.timeTable, dest: '/#timetable' },
          { name: t.attractions, dest: '/#attractions' },
          { name: t.ambassadors, dest: '/our-ambassadors' },
          { name: t.partners, dest: '/#sponsors' },
          { name: t.faq, dest: '/#faq' },
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
          { name: t.myProfile, dest: '/participant-area', disabled: !isLogin },
          {
            name: t.runInfo,
            dest: '/participant-area#run-info',
            disabled: !isLogin,
          },
          {
            name: t.beforeRun,
            dest: '/participant-area#before-run',
            disabled: !isLogin,
          },
          {
            name: isLogin ? t.logOut : t.logIn,
            dest: isLogin ? '' : '/login',
            handleClick: handleLogout,
          },
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
