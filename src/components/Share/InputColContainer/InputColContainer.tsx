import { ReactNode } from 'react';
import scss from './InputColContainer.module.scss';

type InputColContainerProps = {
  children: ReactNode;
};

function InputColContainer({ children }: InputColContainerProps) {
  return <div className={scss.container}>{children}</div>;
}

export default InputColContainer;
