import { Link } from 'react-router-dom';
import scss from './Navigation-header.module.scss';
import { useState } from 'react';

export const NavigationHeader = () => {
  const [user, setUser] = useState(true);

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <div className={scss.navigation}>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>HEMATOBIEG</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--hemato-run']}`}
        >
          <li className={scss.navigation__link}>
            <Link to="/">INFORMACJE O BIEGU</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#about-foundation">O FUNDACJI</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#run">BIEGNIJ GDZIEKOLWIEK JESTEŚ</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#gallery">GALERIA</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#ambassadors">AMBASADORZY I LIDERZY</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#partners">PARTNERZY I SPONSORZY</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/#faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>STREFA UCZESTNIKA</p>
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
              MÓJ PROFIL
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
              INFORMACJE O BIEGU
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
              TRENING PRZED BIEGIEM
            </Link>
          </li>
          <li className={scss.navigation__link}>
            {user ? (
              <button
                className={scss.navigation__logout}
                type="button"
                onClick={handleLogout}
              >
                WYLOGUJ SIĘ
              </button>
            ) : (
              <Link to="/login">ZALOGUJ SIĘ</Link>
            )}
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <p className={scss.navigation__title}>WESPRZYJ</p>
        <ul
          className={`${scss['navigation__links']} ${scss['navigation__links--please-support']}`}
        >
          <li className={scss.navigation__link}>
            <Link to="/please-support">ZOSTAŃ SPONSOREM </Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/please-support#make-donation">WPŁAĆ DAROWIZNĘ</Link>
          </li>
          <li className={scss.navigation__link}>
            <Link to="/please-support#volunteer-area">
              STREFA WOLONTARIUSZY
            </Link>
          </li>
        </ul>
      </div>
      <div className={scss.navigation__item}>
        <Link to="/contact" className={scss.navigation__title}>
          KONTAKT
        </Link>
      </div>
    </div>
  );
};
