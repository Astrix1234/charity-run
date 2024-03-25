import scss from './HematoFAQ.module.scss';
import FAQItemComponent from '../FAQItem/FAQItem';
import faqData from './FAQData';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from '../../translations';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';

const HematoFAQ: React.FC = () => {
  return (
    <section className={scss.faq}>
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
          {faqData.map((item, index) => (
            <FAQItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HematoFAQ;
