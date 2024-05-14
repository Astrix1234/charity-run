import { useLanguageStore } from '../../Zustand/useLanguageStore';
import EmptyAmbassadorBox from '../EmptyAmbassadorBox/EmptyAmbassadorBox';
import ItemSquare from '../ItemSquare/ItemSquare';
import scss from './AmbassadorsAndLeadersList.module.scss';

type AmbassadorsAndLeadersListProps = {
  list: { name: string; role: { eng: string; pl: string }; photo: string }[];
  type: 'ambassador' | 'leader';
};

function AmbassadorsAndLeadersList({
  list,
  type,
}: AmbassadorsAndLeadersListProps) {
  const { language } = useLanguageStore();
  const emptySlotsCount = Math.max(0, 4 - list.length);

  return (
    <ul className={scss.list}>
      {list.map((ambassador, i) => (
        <ItemSquare
          contentType={{
            type: 'image',
            src: ambassador.photo,
            alt: `${ambassador.name} photo`,
          }}
          heading={
            <>
              <p>{`/${ambassador.name}`}</p>
              <p className={scss.heading}>
                {ambassador.role[language === 'PL' ? 'pl' : 'eng']}
              </p>
            </>
          }
          pos={i + 1}
          key={i}
        />
      ))}
      {Array.from({ length: emptySlotsCount }, (_, i) => (
        <EmptyAmbassadorBox
          key={list.length + 1 + i}
          type={type}
          pos={list.length + 1 + i}
        />
      ))}
    </ul>
  );
}

export default AmbassadorsAndLeadersList;
