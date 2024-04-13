import { Link } from 'react-router-dom';
import { StyledPrepare } from './StyledParticipantAreaPrepare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconFoot } from '../../Icons/TimetableIcons/IconFoot/IconFoot';
import { ParticipantAreaItemSquare } from '../ParticipantAreaItemSquare/ParticipantAreaItemSquare';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';

export const ParticipantAreaPrepare = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <StyledPrepare as="section" id="before-run">
      <ParticipantAreaItemSquare pos={1}>
        <>
          <h1>/ {t.train}</h1>
          <p>{t.trainLinks}</p>
          <p>
            <Link
              target="_blank"
              rel="noopener"
              to="https://bieganie.pl/plany-treningowe/"
            >
              {t.trainPlans}
            </Link>
          </p>
          <p>
            <Link
              target="_blank"
              rel="noopener"
              to="https://www.bing.com/videos/riverview/relatedvideo?q=trening+przed+biegiem&mid=A4EB706D1C9A1824C597A4EB706D1C9A1824C597&FORM=VIRE"
            >
              {t.trainStart}
            </Link>
          </p>
        </>
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={2}>
        <>
          <h1>/ {t.diet}</h1>
          <p>{t.dietLinks}</p>
          <p>
            <Link
              target="_blank"
              rel="noopener"
              to="https://dietetycy.org.pl/co-jesc-przed-biegiem/"
            >
              {t.dietEat}
            </Link>
          </p>
          <p>
            <Link
              target="_blank"
              rel="noopener"
              to="https://dietetykanienazarty.pl/b/dieta-biegacza-co-zjesc-przed-biegiem"
            >
              {t.dietRunner}
            </Link>
          </p>
        </>
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={3}>
        <>
          <h1>/ {t.hydration}</h1>
          <p>
            <Link
              target="_blank"
              rel="noopener"
              to="https://world.nessi-sport.com/bieganie-a-nawodnienie-picie-przed-w-trakcie-i-po-treningu"
            >
              {t.hydrationRun}
            </Link>
          </p>
          <p>{t.hydrationAdvice}</p>
        </>
      </ParticipantAreaItemSquare>
      <ParticipantAreaItemSquare pos={4}>
        <>
          <h1>/ {t.run}</h1>
          <p className="map" onClick={onOpenModal}>
            {t.runRoute}
          </p>
          <Modal
            open={open}
            onClose={onCloseModal}
            classNames={{
              modal: 'customModal',
            }}
            center
          >
            <img
              className="modal"
              src="images/hematoRunRoute.webp"
              about="run route full size"
            />
          </Modal>
        </>
      </ParticipantAreaItemSquare>
      <div className="foots foot0">
        <IconFoot />
      </div>
      <div className="foots foot1">
        <IconFoot />
      </div>
      <div className="foots foot2">
        <IconFoot />
      </div>
      <div className="foots foot3">
        <IconFoot />
      </div>
    </StyledPrepare>
  );
};
