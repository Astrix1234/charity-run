import AmbassadorsHeading from '../AmbassadorsHeading/AmbassadorsHeading';
import AmbassadorsList from '../AmbassadorsList/AmbassadorsList';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';
import scss from './OurAmbassadors.module.scss';

const ambassadorsList = [
  {
    name: 'Jan Kowalski',
    role: 'Polski Sportowiec',
    photo: './images/ambassadors/ambassador-1.jpeg',
  },
  {
    name: 'Jan Nowacki',
    role: 'Polski Sportowiec',
    photo: './images/ambassadors/ambassador-2.jpeg',
  },
  {
    name: 'Anna Nowak',
    role: 'Lekarz',
    photo: './images/ambassadors/ambassador-3.jpeg',
  },
  {
    name: 'Grażyna Kowalska',
    role: 'Lekarz',
    photo: './images/ambassadors/ambassador-4.jpeg',
  },
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
