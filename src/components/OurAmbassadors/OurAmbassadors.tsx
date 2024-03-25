import AmbassadorsHeading from '../AmbassadorsHeading/AmbassadorsHeading';
import AmbassadorsList from '../AmbassadorsList/AmbassadorsList';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';
import scss from './OurAmbassadors.module.scss';
import ambassador1 from '../../assets/images/ambassadors/ambassador-1.jpeg';
import ambassador2 from '../../assets/images/ambassadors/ambassador-2.jpeg';
import ambassador3 from '../../assets/images/ambassadors/ambassador-3.jpeg';
import ambassador4 from '../../assets/images/ambassadors/ambassador-4.jpeg';

const ambassadorsList = [
  { name: 'Jan Kowalski', role: 'Polski Sportowiec', photo: ambassador1 },
  { name: 'Jan Nowacki', role: 'Polski Sportowiec', photo: ambassador2 },
  { name: 'Anna Nowak', role: 'Lekarz', photo: ambassador3 },
  { name: 'Grażyna Kowalska', role: 'Lekarz', photo: ambassador4 },
];

function OurAmbassadors() {
  return (
    <section className={scss.container}>
      <AmbassadorsHeading />
      <TrippleArrowDown />
      <AmbassadorsList list={ambassadorsList} />
    </section>
  );
}

export default OurAmbassadors;
