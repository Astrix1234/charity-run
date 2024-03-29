import LoginContainer from '../LoginContainter/LoginContainer';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import scss from './LoginComponent.module.scss';

function LoginComponent() {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <TogetherToTheGoal />
        <LoginContainer />
      </div>
    </section>
  );
}

export default LoginComponent;
