import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import scss from './HematoRunRoute.module.scss';
import { IconArrow } from '../../Icons/IconArrow/IconArrow';
import { IconBgDeco } from '../../Icons/IconBgDeco/IconBgDeco';
import { WaveCreme } from '../../Icons/WaveCremeBackground/WaveCreme';

export const HematoRunRoute = () => {
  //modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  //translation
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section id="runroute" className={scss.section}>
      <div aria-hidden="true" className={scss.background}>
        <WaveCreme />
      </div>
      <div className={scss.header}>
        <h2 className={scss.header__text}>{t.heading}</h2>
        <IconArrow />
      </div>
      <div className={scss.map__container}>
        <img
          className={scss.map}
          src="images/hematoRunRoute.webp"
          about="run route"
          onClick={onOpenModal}
        />
        <Modal open={open} onClose={onCloseModal} center>
          <img
            className={scss.map__modal}
            src="images/hematoRunRoute.webp"
            about="run route full size"
          />
        </Modal>
      </div>
      <div className={scss.backgroundIcon}>
        <IconBgDeco />
      </div>
    </section>
  );
};
