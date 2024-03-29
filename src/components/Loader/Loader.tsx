import scss from './Loader.module.scss';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={scss.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fd7616"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};
