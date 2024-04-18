import './Modal.css';
import { StyledNavigation } from './StyledFooterNavigation';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import { Clause } from './Clause';
import { Statute } from './Statute';

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
          <Modal
            open={openFirst}
            onClose={onCloseFirstModal}
            classNames={{
              modal: 'customModal',
              overlay: 'customOverlay',
            }}
            center
          >
            <div className="clause">
              <Clause />
            </div>
          </Modal>
        </li>
        <li>
          <p className="regulamin" onClick={onOpenSecondModal}>
            Regulamin
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

      <p>
        Wszelkie prawa zastrzeżone © Fundacja Na Rzecz Pomocy Chorym Na
        Białaczki 2024
      </p>
      <p>Utworzone przez wolontariuszy</p>
    </StyledNavigation>
  );
};
