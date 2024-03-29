import AmbassadorsHeading from '../AmbassadorsHeading/AmbassadorsHeading';
import AmbassadorsList from '../AmbassadorsList/AmbassadorsList';
import TrippleArrowDown from '../../Icons/TrippleArrowDown/TrippleArrowDown';
import scss from './OurAmbassadors.module.scss';

const ambassadorsList = [
  {
    name: 'Jan Kowalski',
    role: { pl: 'Polski Sportowiec', eng: 'Polish Athlete' },
    photo: './images/ambassadors/ambassador-1.jpeg',
  },
  {
    name: 'Jan Nowacki',
    role: { pl: 'Polski Sportowiec', eng: 'Polish Athlete' },
    photo: './images/ambassadors/ambassador-2.jpeg',
  },
  {
    name: 'Anna Nowak',
    role: { pl: 'Lekarz', eng: 'Doctor' },
    photo: './images/ambassadors/ambassador-3.jpeg',
  },
  {
    name: 'Grażyna Kowalska',
    role: { pl: 'Lekarz', eng: 'Doctor' },
    photo: './images/ambassadors/ambassador-4.jpeg',
  },
];

function OurAmbassadors() {
  return (
    <section className={scss.container}>
      <div className={scss.heading}>
        <AmbassadorsHeading />
        <TrippleArrowDown />
      </div>
      <AmbassadorsList list={ambassadorsList} />
    </section>
  );
}

export default OurAmbassadors;
