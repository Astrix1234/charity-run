import scss from './HematoFAQ.module.scss';
import React, { useState } from 'react';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from '../../translations';
import { IconBloodCell } from '../../Icons/IconBloodCell/IconBloodCell';
import { IconPlus } from '../../Icons/IconPlus/IconPlus';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItem;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={scss.faq__item}>
      <div className={scss.faq__question}>
        <span>{item.question}</span>
        <div className={scss.faq__icon}>
          <IconPlus onClick={handleIconClick} />
        </div>
      </div>
      {isOpen && (
        <div className={`${scss.faq__answer} ${isOpen ? scss.open : ''}`}>
          {item.answer}
        </div>
      )}
    </div>
  );
};

const faqData: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
  {
    question: 'Lorem ipsum dolor sit amet lorem, consectetur adip?',
    answer:
      'Lorem ipsum dolor sit amet lorem, consectet tempor adip eum non mag et eum erat vol accusam et eum erat vol accusam et eum erat vol accusam et.',
  },
];

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
