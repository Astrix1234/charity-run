import { useLanguageStore } from '../../Zustand/useLanguageStore';
import ItemSquare from '../ItemSquare/ItemSquare';
import scss from './AmbassadorsList.module.scss';

type AmbassadorsListProps = {
  list: { name: string; role: { eng: string; pl: string }; photo: string }[];
};

function AmbassadorsList({ list }: AmbassadorsListProps) {
  const { language } = useLanguageStore();

  return (
    <ul className={scss.list}>
      {list.map((ambassador, i) => (
        <ItemSquare
          contentType={{
            type: 'image',
            src: ambassador.photo,
            alt: `${ambassador.name} photo`,
          }}
          heading={`/${ambassador.name} \n${
            ambassador.role[language === 'PL' ? 'pl' : 'eng']
          }`}
          pos={i + 1}
          key={i}
        />
      ))}
    </ul>
  );
}

export default AmbassadorsList;
