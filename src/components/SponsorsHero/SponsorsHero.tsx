import SponsorsDashedLine from '../../Icons/SponsorsDashedLine/SponsorsDashedLine';
import SponsorsHeading from '../SponsorsHeading/SponsorsHeading';
import SponsorsHeroText from '../SponsorsHeroText/SponsorsHeroText';
import SponsorsRunnersImages from '../SponsorsRunnersImages/SponsorsRunnersImages';
import scss from './SponsorsHero.module.scss';

function SponsorsHero() {
  return (
    <section className={scss.section}>
      <SponsorsHeading />
      <div className={scss.line}>
        <SponsorsDashedLine />
      </div>
      <SponsorsRunnersImages />
      <SponsorsHeroText />
    </section>
  );
}

export default SponsorsHero;
