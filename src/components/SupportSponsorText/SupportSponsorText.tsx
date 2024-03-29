import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './SupportSponsorText.module.scss';


function SupportSponsorText(){
    const { language } = useLanguageStore();

    const textContent = {
        'pl': {
            title: "Dołącz do Naszego Zespołu - Zostań Sponsorem!",
            greeting: "Drodzy Przyjaciele!",
            projectDescription: "Jesteśmy niezwykle podekscytowani naszym nowym projektem – Bieg Charytatywny Fundacji Na Rzecz Pomocy Chorym Na Białaczki. Biegniemy, walczyć z nowotworami krwi, ale nasz wysiłek nie przyniesie efektów bez Waszego wsparcia!",
            whySponsor: "Dlaczego warto zostać sponsorem?",
            sponsorBenefits: {
                point1: "1.",
                point1Title: "Wspieracie walkę z nowotworami krwi:",
                point1Description: "Przekazywane przez Was fundusze pozwalają nam m. in. udoskonalać opiekę, którą szpitale otaczają swoich pacjentów oraz finansować badania nad leczeniem nowotworów krwi.",
                point2: "2.",
                point2Title: "Zdobywacie wizualne uznanie:",
                point2Description: "Wasze logo umieścimy na stronie naszej fundacji, w materiałach promocyjnych oraz pojawi się ono podczas wszelkich eventów.",
                point3: "3.",
                point3Title: "Dołączacie do społecznej odpowiedzialności biznesu:",
                point3Description: "Jako sponsorzy zostajecie częścią niezwykłej grupy firm aktywnie działających na rzecz społeczeństwa. Tym samym wpieracie nas w różnych przedsięwzięciach."
            },
            howToHelp: "Jak możecie pomóc?",
            howToHelpDescription: "Najlepszą formą pomocy jest zostanie sponsorem lub darczyńcą i wsparcie finansowe naszego biegu. Z tego powodu przygotowaliśmy różne pakiety sponsorskie dopasowane do każdego. Jeśli chcecie poznać szczegóły, to skontaktujcie się z nami, a pomożemy Wam wybrać opcję najlepiej odpowiadającą Waszym potrzebom.",
            contact: "Kontakt:",
            contactEmail: "Jeżeli chcecie dowiedzieć się więcej na temat sponsoringu, skontaktujcie się z nami poprzez adres mailowy:",
            email: "kontakt@fundacja.hematologiczna.org",
            thanks: "Dziękujemy za Wasze zaangażowanie i wsparcie naszej misji walki z nowotworami krwi!",
            regards: "Z wyrazami szacunku,",
            team: "Zespół Fundacji Pomocy na Rzecz Chorych na Białaczkę"
        },
        'eng': {
            title: "Join Our Team - Become a Sponsor!",
            greeting: "Dear Friends!",
            projectDescription: "We are incredibly excited about our new project - Charity Run of the Foundation for Helping Patients with Leukemia. We run to fight blood cancers, but our effort will not yield results without your support!",
            whySponsor: "Why become a sponsor?",
            sponsorBenefits: {
                point1: "1.",
                point1Title: "Support the fight against blood cancers:",
                point1Description: "Funds provided by you allow us, among other things, to improve the care provided by hospitals to their patients and to finance research into the treatment of blood cancers.",
                point2: "2.",
                point2Title: "Gain visual recognition:",
                point2Description: "Your logo will be placed on our foundation's website, in promotional materials, and will appear at all events.",
                point3: "3.",
                point3Title: "Join corporate social responsibility:",
                point3Description: "As sponsors, you become part of an extraordinary group of companies actively working for the benefit of society. You thus support us in various initiatives."
            },
            howToHelp: "How can you help?",
            howToHelpDescription: "The best way to help is to become a sponsor or donor and support our run financially. For this reason, we have prepared various sponsorship packages tailored to everyone. If you want to learn more, contact us and we will help you choose the option that best suits your needs.",
            contact: "Contact:",
            contactEmail: "If you want to learn more about sponsoring, contact us via email:",
            email: "contact@foundationforhematology.org",
            thanks: "Thank you for your commitment and support in our mission to fight blood cancers!",
            regards: "Best regards,",
            team: "Team of the Foundation for Helping Patients with Leukemia"
        }
    };

    const text = textContent[language === 'PL' ? 'pl' : 'eng'];

    return (
        <div className={scss.sponsorship}>
            <div className={scss.title}>{text.title}</div>
            <br/>

            <div className={scss.content}>
                <p>{text.greeting}</p>
                <p>{text.projectDescription}</p>
            </div>
            <br/>

            <div className={scss.subtitle}>{text.whySponsor}</div>
            <br/>

            <div className={scss.content}>
                <p className={scss.benefits}><span>{text.sponsorBenefits.point1}</span>{text.sponsorBenefits.point1Title}<br/>{text.sponsorBenefits.point1Description}</p>
                <p className={scss.benefits}><span>{text.sponsorBenefits.point2}</span>{text.sponsorBenefits.point2Title}<br/>{text.sponsorBenefits.point2Description}</p>
                <p className={scss.benefits}><span>{text.sponsorBenefits.point3}</span>{text.sponsorBenefits.point3Title}<br/>{text.sponsorBenefits.point3Description}</p>
            </div>
            <br/>

            <div className={scss.title}>{text.howToHelp}</div>
            <br/>

            <div className={scss.content}>
                <p>{text.howToHelpDescription}</p>
            </div>
            <br/>

            <div className={scss.title}>{text.contact}</div>
            <br/>

            <div className={scss.content}>
                <p>{text.contactEmail}</p>
            </div>
            <div className={scss.contactEmail}>
                    <a href={`mailto:${text.email}`} className={scss.contactLink}>{text.email}</a>
            </div>
            <br/>
            <div className={scss.content}>
            <p>{text.thanks}</p>
                <p>{text.regards}<br/>{text.team}</p>
            </div>
        </div>

    );
}

export default SupportSponsorText;
