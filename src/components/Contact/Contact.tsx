import { IconCodeQR } from '../../Icons/IconCodeQR/IconCodeQR';
import { IconEmail } from '../../Icons/IconEmail/IconEmail';
import { IconFacebook } from '../../Icons/IconFacebook/IconFacebook';
import { IconGlobus } from '../../Icons/IconGlobus/IconGlobus';
import { IconInstagram } from '../../Icons/IconInstagram/IconInstagram';
import { IconLinkedIn } from '../../Icons/IconLinkedIn/IconLinkedIn';
import { IconYouTube } from '../../Icons/IconYouTube/IconYouTube';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { FoundationLogotype } from '../FoundationLogotype/FoundationLogotype';
import SupportHand from '../SupportHand/SupportHand';
import scss from './Contact.module.scss';
import translations from './translations';

const Contact = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.contact}>
      <div className={scss.contact__container}>
        <FoundationLogotype />
        <div className={scss.contact__wrapper}>
          <div className={scss.contact__box}>
            <div className={scss.contact__address}>
              <h3 className={scss.contact__title}>{t.title}</h3>
              <p className={scss.contact__text}>
                93-513 Łódź, ul. Pabianicka 62
              </p>
              <div>
                <p className={scss.contact__text}>NIP 729-23-25-734</p>
                <p className={scss.contact__text}>KRS 0000069531</p>
              </div>
            </div>
            <div className={scss.contact__email}>
              <div className={scss.contact__icon}>
                <IconEmail />
              </div>
              <a
                className={scss.contact__email__link}
                href="mailto:kontakt@fundacja.hematologiczna.org"
              >
                kontakt@fundacja.hematologiczna.org
              </a>
            </div>
            <div className={scss.contact__socials}>
              <IconFacebook />
              <IconInstagram />
              <IconYouTube />
              <IconLinkedIn />
            </div>
          </div>
          <div className={`${scss.contact__box} ${scss.contact__box__qr}`}>
            <IconCodeQR />
            <div
              className={`${scss.contact__box} ${scss.contact__box__inline}`}
            >
              <div className={scss.contact__icon}>
                <IconGlobus />
              </div>
              <a
                className={scss.contact__link}
                href="https://fundacja.hematologiczna.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.site}
              </a>
            </div>
          </div>
        </div>
        <div className={scss.contact__support}>
          <SupportHand />
        </div>
      </div>
    </section>
  );
};

export default Contact;
