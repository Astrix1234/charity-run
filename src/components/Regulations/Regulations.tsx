import scss from './Regulations.module.scss';
import { Button } from '../Button/Button';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconAgree } from '../../Icons/IconAgree/IconAgree';
import { IconCloseModal } from '../../Icons/IconCloseModal/IconCloseModal';

interface RegulationsProps {
  onClose: () => void;
}

export const Regulations: React.FC<RegulationsProps> = ({ onClose }) => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <section className={scss.regulations}>
      <div className={scss.regulations__container}>
        <div className={scss.regulations__modal}>
          <div className={scss.regulations__modalCloseIcon}>
            <IconCloseModal onClick={onClose} />
          </div>
          <div className={scss.regulations__info}>
            <h4 className={scss.regulations__title}>
              {t.processingInformation}
            </h4>
            <p className={scss.regulations__text}>
              {t.processingInformationDetails}
            </p>
          </div>
          <div className={scss.regulations__info}>
            <h4 className={scss.regulations__title}>
              {t.foundationInformationClause}
            </h4>
            <p className={scss.regulations__text}>
              {t.foundationInformationClauseDetails}
            </p>
          </div>
          <div className={scss.regulations__button}>
            <Button onClick={onClose} content={t.button} icon={<IconAgree />} />
          </div>
        </div>
      </div>
    </section>
  );
};
