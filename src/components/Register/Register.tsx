import scss from './Register.module.scss';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import { FormRegister } from '../FormRegister/FormRegister';

export const Register = () => {
  return (
    <section className={scss.register}>
      <div className={scss.register__container}>
        <TogetherToTheGoal />
        <FormRegister />
      </div>
    </section>
  );
};
