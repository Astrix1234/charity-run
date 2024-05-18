import { ReactNode } from 'react';
import scss from './DonationEmail.module.scss';

type DonationEmailProps = {
  children: ReactNode;
  id: string;
  error?: { condition: boolean; message: string };
  label: string;
};

function DonationEmail({ children, error, label, id }: DonationEmailProps) {
  return (
    <label
      htmlFor={id}
      className={`${scss.label} ${
        error && error.condition ? scss.label__error : ''
      }`}
    >
      <p className={scss.text}>{label}</p>
      {children}
      {error && error.condition && (
        <span className={scss.message}>{error.message}</span>
      )}
    </label>
  );
}

export default DonationEmail;
