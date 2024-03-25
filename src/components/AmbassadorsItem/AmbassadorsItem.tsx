import DotsSquare from '../../Icons/DotsSquare/DotsSquare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './AmbassadorsItem.module.scss';

type AmbassadorsItemProps = {
  ambassador: {
    name: string;
    photo: string;
    role: { eng: string; pl: string };
  };
  pos: number;
};

function AmbassadorsItem({ ambassador, pos }: AmbassadorsItemProps) {
  const { language } = useLanguageStore();

  return (
    <li className={scss.container}>
      <div className={scss.text}>
        <p className={scss.name}>{ambassador.name}</p>
        <p className={scss.role}>
          {ambassador.role[language === 'PL' ? 'pl' : 'eng']}
        </p>
      </div>
      <div className={scss.photo}>
        <img src={ambassador.photo} alt={`${ambassador.name} photo`} />
      </div>
      <div className={scss.pos}>{pos}</div>
      <div className={scss.dots}>
        <DotsSquare />
      </div>
    </li>
  );
}

export default AmbassadorsItem;
