import { ReactNode } from 'react';
import { TogetherToTheGoal } from '../TogetherToTheGoal/TogetherToTheGoal';
import scss from './LoginLayout.module.scss';

type LoginLayoutProps = {
  children: ReactNode;
};

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <TogetherToTheGoal />
        {children}
      </div>
    </section>
  );
}

export default LoginLayout;
