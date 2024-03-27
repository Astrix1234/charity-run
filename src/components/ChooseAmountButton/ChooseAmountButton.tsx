import scss from './ChooseAmountButton.module.scss';

type ChooseAmountButtonProps = {
  amount: number;
  currentAmount: number;
  handleClick: () => void;
};

function ChooseAmountButton({
  amount,
  currentAmount,
  handleClick,
}: ChooseAmountButtonProps) {
  const isActive = amount === currentAmount;

  return (
    <button
      onClick={handleClick}
      className={`${scss.btn} ${isActive ? scss.active : ''}`}
    >
      {amount} zł
    </button>
  );
}

export default ChooseAmountButton;
