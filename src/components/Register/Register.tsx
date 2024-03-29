import scss from './Register.module.scss';
// import { Button } from '../Button/Button';
// import { useLanguageStore } from '../../Zustand/useLanguageStore';
// import translations from './translations';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { FormRegister } from '../FormRegister/FormRegister';

export const Register = () => {
  // const { language } = useLanguageStore();
  // const t = translations[language];

  return (
    <section className={scss.register}>
      <div className={scss.register__background}>
        <div className={scss.register__container}>
          <TogetherToTheGoal />
          <FormRegister />
        </div>
      </div>
    </section>
  );
};
