import { ReactNode } from 'react';
import scss from './DonationAmountInput.module.scss';

type DonationAmountInputProps = {
  isActive: boolean;
  value: number;
  children: ReactNode;
  error: { condition: boolean; message: string };
};

function DonationAmountInput({
  isActive,
  value,
  children,
  error,
}: DonationAmountInputProps) {
  return (
    <label
      className={`${scss.label} ${
        isActive && value && value > 0 ? scss.active : ''
      }`}
      htmlFor="donation-amount"
    >
      {children}
      <span className={scss.text}>zł</span>{' '}
      {error.condition && <span className={scss.error}>{error.message}</span>}
    </label>
  );
}

export default DonationAmountInput;
