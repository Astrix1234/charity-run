import scss from './SponsorsList.module.scss';

type SponsorsListProps = {
  list: { url: string; name: string }[];
  heading: string;
};

function SponsorsList({ list, heading }: SponsorsListProps) {
  return (
    <div className={scss.container}>
      <h4 className={scss.heading}>{heading}</h4>
      <ul className={scss.list}>
        {list.map((item, i) => (
          <div key={i} className={scss.sponsor}>
            <img src={item.url} alt={item.name} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SponsorsList;
