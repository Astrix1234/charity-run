import { useLanguageStore } from '../../Zustand/useLanguageStore';
import ItemSquare from '../ItemSquare/ItemSquare';
import scss from './SupportVolunteersList.module.scss';

type Task = {
    name: { eng: string; PL: string };
    description: string;
};

type SupportVolunteersListProps = {
    list: Task[];
};

function SupportVolunteersList({ list }: SupportVolunteersListProps) {
    const { language } = useLanguageStore();

    return (
        <ul className={scss.list}>
            {list.map((volunteer, i) => (
                <ItemSquare
                    heading={`/${volunteer.name[language === 'PL' ? 'PL' : 'eng']}: ${volunteer.description}`} 
                    pos={i + 1}
                    key={i}
                />
            ))}
        </ul>
    );
}

export default SupportVolunteersList;
