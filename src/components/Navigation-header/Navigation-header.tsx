import { Link } from 'react-router-dom';
import scss from './Navigation-header.module.scss';
import { useState } from 'react';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';

export const NavigationHeader = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const [user, setUser] = useState(true);

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <div className={scss.navigation}>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>{t.hematoRun}</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--hemato-run']}`}
        >
          <li className={scss.navigation__link}>
            <Link to="/">{t.aboutRun}</Link>
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
              !user ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            <Link
              className={` ${!user ? scss['navigation__not-logged-in'] : ''}`}
              to="/participant-area"
            >
              {t.myProfile}
            </Link>
          </li>
          <li
            className={`${scss['navigation__link']} ${
              !user ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            <Link
              className={` ${!user ? scss['navigation__not-logged-in'] : ''}`}
              to="/participant-area#run-info"
            >
              {t.runInfo}
            </Link>
          </li>
          <li
            className={`${scss['navigation__link']} ${
              !user ? scss['navigation__link--not-logged-in'] : ''
            }`}
          >
            <Link
              className={` ${!user ? scss['navigation__not-logged-in'] : ''}`}
              to="/participant-area#before-run"
            >
              {t.beforeRun}
            </Link>
          </li>
          <li className={scss.navigation__link}>
            {user ? (
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
            <Link to="/support-sponsors">{t.becomeSponsor}</Link>
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
