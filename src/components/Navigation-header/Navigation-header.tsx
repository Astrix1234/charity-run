import { Link } from 'react-router-dom';
import scss from './Navigation-header.module.scss';
import { useState } from 'react';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from '../../translations';

export const NavigationHeader = () => {
  const { toggleLanguage, language } = useLanguageStore();
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
            <Link to="/#about-foundation">{t.aboutFoundation}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#run">{t.runAnywhere}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#gallery">{t.gallery}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#ambassadors">{t.ambassadors}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#partners">{t.partners}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#faq">{t.faq}</Link>
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
            <Link to="/please-support">{t.becomeSponsor}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/please-support#make-donation">{t.makeDonation}</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/please-support#volunteer-area">{t.volunteerArea}</Link>
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
