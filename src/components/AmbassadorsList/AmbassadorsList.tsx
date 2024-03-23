import AmbassadorsItem from '../AmbassadorsItem/AmbassadorsItem';
import scss from './AmbassadorsList.module.scss';

type AmbassadorsListProps = {
  list: { name: string; role: string; photo: string }[];
};

function AmbassadorsList({ list }: AmbassadorsListProps) {
  return (
    <ul className={scss.list}>
      {list.map((item, i) => (
        <AmbassadorsItem ambassador={item} pos={i + 1} />
      ))}
    </ul>
  );
}

export default AmbassadorsList;
