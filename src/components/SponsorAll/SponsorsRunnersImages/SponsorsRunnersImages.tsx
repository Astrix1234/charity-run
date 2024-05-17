import RunnerMan from '../../../Icons/RunnerMan/RunnerMan';
import RunnerWoman from '../../../Icons/RunnerWoman/RunnerWoman';
import scss from './SponsorsRunnersImages.module.scss';

function SponsorsRunnersImages() {
  return (
    <>
      <div className={scss.man}>
        <RunnerMan />
      </div>
      <div className={scss.woman}>
        <RunnerWoman />
      </div>
    </>
  );
}

export default SponsorsRunnersImages;
