import scss from './Statements.module.scss';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import { IconAgree } from '../../../Icons/IconAgree/IconAgree';
import { IconStatementSquare } from '../../../Icons/IconStatementSquare/IconStatementSquare';

interface StatementsProps {
  consent: boolean;
  handleIconClick: () => void;
}

export const Statements = ({ consent, handleIconClick }: StatementsProps) => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const consentClass = consent
    ? `${scss.regulations__consent} ${scss.regulations__consentFilled}`
    : scss.regulations__consent;

  return (
    <div className={scss.regulations}>
      <div className={scss.regulations__content}>
        <p className={scss.regulations__sectionTitle}>{t.statement}</p>
        <h3 className={scss.regulations__regulationsTitle}>
          <span className={consentClass} onClick={handleIconClick}>
            <IconStatementSquare />
            {consent && (
              <span className={scss.regulations__iconAgree}>
                <IconAgree />
              </span>
            )}
          </span>
          {t.statementTitle}
        </h3>
        <p className={scss.regulations__iDo}>{t.statementIDo}</p>
        <ol className={scss.regulations__statementList}>
          <li className={scss.regulations__statementItem}>
            {t.statementItem1}
          </li>
          <li className={scss.regulations__statementItem}>
            {t.statementItem2}
          </li>
          <li className={scss.regulations__statementItem}>
            {t.statementItem3}
          </li>
          <li className={scss.regulations__statementItem}>
            {t.statementItem4}
          </li>
          <li className={scss.regulations__statementItem}>
            {t.statementItem5}
          </li>
          <li className={scss.regulations__statementItem}>
            {t.statementItem6}
          </li>
        </ol>
      </div>
    </div>
  );
};
