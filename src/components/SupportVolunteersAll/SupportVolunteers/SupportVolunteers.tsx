import SupportHeading from '../../Share/SupportHeading/SupportHeading';
import SupportSubHeading from '../../Share/SupportSubHeading/SupportSubHeading';
import SupportVolunteersJoin from '../SupportVolunteersJoin/SupportVolunteersJoin';
import SupportVolunteersHeading from '../SupportVolunteersHeading/SupportVolunteersHeading';
import SupportVolunteersList from '../SupportVolunteersList/SupportVolunteersList';
import SupportVolunteersText from '../SupportVolunteersText/SupportVolunteersText';
import scss from './SupportVolunteers.module.scss';

function SupportVolunteers() {
  return (
    <section className={scss.section}>
      <div className={scss.container}>
        <div className={scss.heading}>
          <SupportHeading
            headingText={{
              pl: 'Wesprzyj Fundację \n i zostań wolontariuszem',
              eng: 'Support the foundation and become a volunteer',
            }}
          />
        </div>
        <SupportSubHeading
          content={{
            pl: 'Pomóż nam w realizacji celów Fundacji oraz wesprzyj organizację',
            eng: 'Help us achieve the goals of the Foundation and support the organization',
          }}
          titleSub={{ pl: 'biegu', eng: 'run' }}
        />

        <SupportVolunteersJoin />
        <SupportVolunteersHeading
          subText={{
            pl: 'W jakich obszarach możesz pomóc?',
            eng: 'In what areas can you help?',
          }}
        />
        <SupportVolunteersList />
        <SupportVolunteersHeading
          subText={{
            pl: 'Kto może zostać wolontariuszem?',
            eng: 'Who can become a volunteer?',
          }}
        />
        <SupportVolunteersText />
      </div>
    </section>
  );
}

export default SupportVolunteers;
