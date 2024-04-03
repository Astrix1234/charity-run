import TealDashedBlobRight from '../../Icons/TealDashedBlobRight/TealDashedBlobRight';
import TealDashedBlobLeft from '../../Icons/TealDashedBlodLeft/TealDashedBlobLeft';
import DonationContainer from '../DonationContainer/DonationContainer';
import SupportHeading from '../SupportHeading/SupportHeading';
import SupportSubHeading from '../SupportSubHeading/SupportSubHeading';
import scss from './SupportDonation.module.scss';

function SupportDonation() {
  return (
    <section className={scss.section}>
      <div className={scss.background} />
      <div className={scss.container}>
        <SupportHeading
          headingText={{
            pl: 'Wesprzyj Fundację wpłacając darowiznę',
            eng: 'Support the foundation by making a dontaion',
          }}
        />
        <SupportSubHeading
          subText={{
            pl: 'Wpłać darowiznę aby wesprzeć nas w organizacji wydarzenia',
            eng: 'Make a donation to support us in organizing',
          }}
          mainText={{ pl: 'Hematobieg', eng: 'Hematorun' }}
        />
        <DonationContainer />
      </div>
      <TealDashedBlobRight />
      <TealDashedBlobLeft />
    </section>
  );
}

export default SupportDonation;
