import SupportHeading from '../SupportHeading/SupportHeading';
import SupportSubHeading from '../SupportSubHeading/SupportSubHeading';
import SupportVolunteersJoin from '../SupportVolunteersJoin/SupportVolunteersJoin';
import SupportVolunteersHeading from '../SupportVolunteersHeading/SupportVolunteersHeading';
import SupportVolunteersList from '../SupportVolunteersList/SupportVolunteersList';
import SupportVolunteersText from '../SupportVolunteersText/SupportVolunteersText';
import scss from './SupportVolunteers.module.scss';

const tasks = [
    { name: { eng: "Registration support", PL: "Obsługa rejestracji uczestników" }, description: "Pomóż nam w przyjmowaniu zgłoszeń uczestników, wydawaniu numerów startowych i udzielaniu informacji." },
    { name: { eng: "Checkpoint assistance", PL: "Obsługa punktów kontrolnych na trasie" }, description: "Zapewnij bezpieczeństwo uczestnikom, stając na posterunkach kontrolnych i udzielając wsparcia w razie potrzeby." },
    { name: { eng: "Gathering point and accompanying events support", PL: "Obsługa punktu zbiórki i wydarzeń towarzyszących" }, description: "Pomóż nam w organizacji punktu zbiórki, stoisk gastronomicznych, atrakcji dla dzieci i innych wydarzeń towarzyszących." },
    { name: { eng: "Promotion and marketing", PL: "Promocja i marketing" }, description: "Pomóż nam w promocji wydarzenia poprzez udział w działaniach marketingowych, dzielenie się informacjami w mediach społecznościowych." }
];


function SupportVolunteers() {
    return (
        <section className={scss.section}>
            < div className={scss.container}>
                <div className={scss.heading}>
                <SupportHeading
                headingText={{
                    pl: 'Wesprzyj Fundację i zostań wolontariuszem',
                    eng: 'Support the foundation and become a volunteer',
                }}
                /></div>
                <SupportSubHeading
                subText={{
                    pl: 'Pomóż nam w realizacji celów Fundacji oraz wesprzyj organizację',
                    eng: 'Help us achieve the goals of the Foundation and support the organization',
                }}
                mainText={{ pl: 'Hematobiegu', eng: 'Hematorun' }}
                />
            
            <SupportVolunteersJoin />
            <SupportVolunteersHeading subText={{
                    pl: 'W jakich obszarach możesz pomóc?',
                    eng: 'In what areas can you help?',
                }}/>
            <SupportVolunteersList list={tasks} />
            <SupportVolunteersHeading subText={{
                    pl: 'Kto może zostać wolontariuszem?',
                    eng: 'Who can become a volunteer?'
                }}/>
            <SupportVolunteersText /></div>
        </section>
    );
}

export default SupportVolunteers;
