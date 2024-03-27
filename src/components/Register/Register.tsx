import { useState } from 'react';
import scss from './Register.module.scss';
// import { Button } from '../Button/Button';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from './translations';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { Regulations } from '../Regulations/Regulations';
import { FormRegister } from '../FormRegister/FormRegister';

export const Register = () => {
  // const { language } = useLanguageStore();
  // const t = translations[language];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleClick = () => {
  //   console.log('Button clicked');
  // };

  return (
    <section className={scss.register}>
      <div className={scss.register__background}>
        <div className={scss.register__container}>
          <TogetherToTheGoal />
          <FormRegister />
          <p>
            zapoznałem/am się z{' '}
            <span onClick={openModal} className={scss.register__link}>
              Informacją o przetwarzaniu danych osobowych{' '}
            </span>
            oraz Klauzulą informacyjną i przyjmuję ją do wiadomości,
          </p>
        </div>
        {isModalOpen && <Regulations />}
      </div>
    </section>
  );
};
