import './Modal.css';
import { StyledNavigation } from './StyledFooterNavigation';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import { Clause } from '../../LegalAll/Clause/Clause';
import { Statute } from '../../LegalAll/Statute/Statute';

export const FooterNavigation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const onOpenFirstModal = () => setOpenFirst(true);
  const onOpenSecondModal = () => setOpenSecond(true);
  const onCloseFirstModal = () => setOpenFirst(false);
  const onCloseSecondModal = () => setOpenSecond(false);
  return (
    <StyledNavigation>
      <ul>
        <li>
          <p onClick={onOpenFirstModal}>{t.clause}</p>
          <div className="modal">
            <Modal
              open={openFirst}
              onClose={onCloseFirstModal}
              classNames={{
                modal: 'customModal',
                overlay: 'customOverlay',
              }}
              center
              showCloseIcon={true}
            >
              <div className="clause">
                <Clause />
              </div>
            </Modal>
          </div>
        </li>
        <li>
          <p className="regulamin" onClick={onOpenSecondModal}>
            {t.statute}
          </p>
          <Modal
            open={openSecond}
            onClose={onCloseSecondModal}
            classNames={{
              modal: 'customModal',
              overlay: 'customOverlay',
            }}
            center
          >
            <div className="statute">
              <Statute />
            </div>
          </Modal>
        </li>
      </ul>

      <p>{t.reserved}</p>
      <p>{t.volunteers}</p>
    </StyledNavigation>
  );
};
