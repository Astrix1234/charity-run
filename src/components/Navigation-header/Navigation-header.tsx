import { Link, useNavigate } from 'react-router-dom';
import scss from './Navigation-header.module.scss';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { logout } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';

export const NavigationHeader = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { isLogin, setIsLogin } = useIsLoginStore();
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleLinkClickParticipant = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (location.pathname !== '/participant-area') {
      navigate('/participant-area');
    }
  };

  return (
    <div className={scss.navigation}>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>{t.hematoRun}</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--hemato-run']}`}
        >
          <li className={scss.navigation__link}>
            <a onClick={e => handleLinkClick(e)}>{t.aboutRun}</a>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#gallery">{t.gallery}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#timetable">{t.timeTable}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#attractions">{t.attractions}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/our-ambassadors">{t.ambassadors}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#our-sponsors">{t.partners}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#faq">{t.faq}</Link>
          </li>
          <li
            className={`${scss.navigation__link} ${scss.navigation__website}`}
          >
            <Link to="https://fundacja.hematologiczna.org/" target="_blanc">
              {t.aboutFoundation}
            </Link>
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>{t.participantAreaTitle}</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--participant-area']}`}
        >
          <li
            className={`${scss['navigation__link']} ${
              !isLogin ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            {!isLogin ? (
              <p className={scss['navigation__not-logged-in']}>{t.myProfile}</p>
            ) : (
              <a onClick={e => handleLinkClickParticipant(e)}>{t.myProfile}</a>
            )}
          </li>
          <li
            className={`${scss['navigation__link']} ${
              !isLogin ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            {!isLogin ? (
              <p className={scss['navigation__not-logged-in']}>{t.runInfo}</p>
            ) : (
              <Link to="/participant-area#run-info">{t.runInfo}</Link>
            )}
          </li>
          <li
            className={`${scss['navigation__link']} ${
              !isLogin ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            {!isLogin ? (
              <p className={scss['navigation__not-logged-in']}>{t.beforeRun}</p>
            ) : (
              <Link to="/participant-area#before-run">{t.beforeRun}</Link>
            )}
          </li>

          <li className={scss.navigation__link}>
            {isLogin ? (
              <button
                className={scss.navigation__logout}
                type="button"
                onClick={handleLogout}
              >
                {t.logOut}
              </button>
            ) : (
              <Link to="/login">{t.logIn}</Link>
            )}
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>{t.support}</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--please-support']}`}
        >
          <li className={scss.navigation__link}>
            <Link to="/support-donors">{t.becomeSponsor}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/support-donation">{t.makeDonation}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/support-volunteers">{t.volunteerArea}</Link>
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <Link to="/contact" className={scss.navigation__title}>
          {t.contact}
        </Link>
      </div>
    </div>
  );
};
