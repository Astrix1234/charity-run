import scss from './DonationAmountInput.module.scss';

type DonationAmountInputProps = {
  value: number;
  handleChange: (e: number) => void;
};

function DonationAmountInput({
  value,
  handleChange,
}: DonationAmountInputProps) {
  return (
    <label className={scss.label} htmlFor="donation-amount">
      <input
        className={scss.input}
        id="donation-amount"
        name="donation-amount"
        type="number"
        onChange={e => {
          if (isNaN(parseInt(e.target.value))) {
            if (!e.target.value) handleChange(0);
            return;
          }

          handleChange(parseInt(e.target.value));
        }}
        value={value || ''}
      />

      <span className={scss.text}>zł</span>
    </label>
  );
}

export default DonationAmountInput;
