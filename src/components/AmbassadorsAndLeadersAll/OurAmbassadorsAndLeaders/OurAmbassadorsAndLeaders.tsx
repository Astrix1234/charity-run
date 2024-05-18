import AmbassadorsAndLeadersHeading from '../AmbassadorsAndLeadersHeading/AmbassadorsAndLeadersHeading';
import TrippleArrowDown from '../../../Icons/TrippleArrowDown/TrippleArrowDown';
import scss from './OurAmbassadorsAndLeaders.module.scss';
import AmbassadorsAndLeaderContainer from '../AmbassadorsAndLeaderContainer/AmbassadorsAndLeaderContainer';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';

const ambassadorsList = [
  {
    name: 'Adam Kszczot',
    role: { pl: 'Polski Sportowiec', eng: 'Polish Athlete' },
    photo: './images/ambassadors/adam-kszczot.jpeg',
  },
  {
    name: 'Kamila Ściborek',
    role: { pl: 'Polska Aktorka', eng: 'Polish Actress' },
    photo: './images/ambassadors/kamila-sciborek.jpeg',
  },
];

const leadersList = [
  {
    name: 'Adam Kszczot',
    role: { pl: 'Polski Sportowiec', eng: 'Polish Athlete' },
    photo: './images/ambassadors/adam-kszczot.jpeg',
  },
  {
    name: 'Emilia Petela',
    role: {
      pl: 'Mistzyni Świata Spartan Race',
      eng: 'Spartan Race World Champion',
    },
    photo: './images/ambassadors/emilia-petela.jpeg',
  },
];

function OurAmbassadorsAndLeaders() {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <section className={scss.container}>
      <div className={scss.heading}>
        <AmbassadorsAndLeadersHeading />
        <div className={scss.arrow}>
          <TrippleArrowDown />
        </div>
      </div>
      <AmbassadorsAndLeaderContainer
        type="ambassador"
        headingText={t.ambassadors}
        list={ambassadorsList}
      />
      <AmbassadorsAndLeaderContainer
        type="leader"
        headingText={t.leaders}
        list={leadersList}
      />
    </section>
  );
}

export default OurAmbassadorsAndLeaders;
