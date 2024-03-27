import scss from './HematoFAQ.module.scss';
import FAQItemComponent from '../FAQItem/FAQItem';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';

const HematoFAQ: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <section id="faq" className={scss.faq}>
      <div className={scss.faq__container}>
        <div>
          <h1 className={scss.faq__title}>
            FAQ
            <div>
              <IconBloodCell />
            </div>
          </h1>
        </div>
        <div className={scss.faq__listContainer}>
          {t.faqItems.map((item, index) => (
            <FAQItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HematoFAQ;
