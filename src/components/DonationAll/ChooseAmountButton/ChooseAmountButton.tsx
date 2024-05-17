import { ReactNode } from 'react';
import scss from './ChooseAmountButton.module.scss';

type ChooseAmountButtonProps = {
  amount: number;
  value: number;
  children: ReactNode;
  id: string;
};

function ChooseAmountButton({
  amount,
  value,
  children,
  id,
}: ChooseAmountButtonProps) {
  const isActive = amount === value;

  return (
    <label
      className={`${scss.label} ${isActive ? scss.label__active : ''}`}
      htmlFor={id}
    >
      {children}
      <span>{amount} zł</span>
    </label>
  );
}

export default ChooseAmountButton;
