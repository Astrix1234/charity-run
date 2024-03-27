import { useState } from 'react';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import ChooseAmountButton from '../ChooseAmountButton/ChooseAmountButton';
import scss from './DonationBox.module.scss';
import translations from './translations';
import SupportButton from '../SupportButton/SupportButton';
import DonationAmountInput from '../DonationAmountInput/DonationAmountInput';

function DonationBox() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const amounts = [25, 50, 100];

  const [currentAmount, setCurrentAmount] = useState<number>(0);

  return (
    <div className={scss.container}>
      <h4 className={scss.heading}>{t.support}</h4>
      <p className={scss.join}>{t.join}</p>
      <p className={scss.choose}>{t.choose}</p>
      <div className={scss.row}>
        {amounts.map((item, i) => (
          <ChooseAmountButton
            key={i}
            handleClick={() => setCurrentAmount(item)}
            amount={item}
            currentAmount={currentAmount}
          />
        ))}
        <DonationAmountInput
          value={currentAmount}
          handleChange={e => setCurrentAmount(e)}
        />
      </div>
      <SupportButton
        disabled={!currentAmount}
        handleClick={() => console.log(currentAmount)}
      />
    </div>
  );
}

export default DonationBox;
