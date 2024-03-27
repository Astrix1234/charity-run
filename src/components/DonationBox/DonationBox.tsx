import scss from './DonationBox.module.scss';

function DonationBox() {
  return (
    <div className={scss.container}>
      <h3 className={scss.heading}></h3>
      <p className={scss.join}></p>
      <p className={scss.choose}></p>
      <div className={scss.row}></div>
      <button className={scss.button}></button>
    </div>
  );
}

export default DonationBox;
