import SupportHeading from '../SupportHeading/SupportHeading';
import SupportSubHeading from '../SupportSubHeading/SupportSubHeading';
import scss from './SupportVolunteers.module.scss';

function SupportVolunteers() {
  return (
    <section className={scss.section}>
      <div className={scss.background} />
      <div className={scss.container}>
        <div className={scss.heading}>
          <SupportHeading
            headingText={{
              pl: 'Wesprzyj Fundację i zostań wolontariuszem',
              eng: 'Support the foundation and become a volunteer',
            }}
          />
        </div>
        <SupportSubHeading
          subText={{
            pl: 'Pomóż nam w realizacji celów Fundacji oraz wesprzyj organizację',
            eng: 'Help us achieve the goals of the Foundation and support the organization',
          }}
          mainText={{ pl: 'Hematobiegu', eng: 'Hematorun' }}
        />
      </div>
    </section>
  );
}

export default SupportVolunteers;
