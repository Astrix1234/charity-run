import AmbassadorsHeading from '../AmbassadorsHeading/AmbassadorsHeading';
import AmbassadorsList from '../AmbassadorsList/AmbassadorsList';
import TrippleArrowDown from '../TrippleArrowDown/TrippleArrowDown';
import scss from './OurAmbassadors.module.scss';
import ambassador1 from '../../../public/images/ambassadors/ambassador-1.jpeg';
import ambassador2 from '../../../public/images/ambassadors/ambassador-2.jpeg';
import ambassador3 from '../../../public/images/ambassadors/ambassador-3.jpeg';
import ambassador4 from '../../../public/images/ambassadors/ambassador-4.jpeg';

const ambassadorsList = [
  { name: 'Jan Kowalski', role: 'Polski Sportowiec', photo: ambassador1 },
  { name: 'Jan Nowacki', role: 'Polski Sportowiec', photo: ambassador2 },
  { name: 'Anna Nowak', role: 'Lekarz', photo: ambassador3 },
  { name: 'Grażyna Kowalska', role: 'Lekarz', photo: ambassador4 },
];

function OurAmbassadors() {
  return (
    <div className={scss.container}>
      <AmbassadorsHeading />
      <TrippleArrowDown />
      <AmbassadorsList list={ambassadorsList} />
    </div>
  );
}

export default OurAmbassadors;
