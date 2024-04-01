import { useLanguageStore } from '../../Zustand/useLanguageStore';
import scss from './SupportSponsorText.module.scss';
import translations from './translations';


function SupportSponsor(){
    const { language } = useLanguageStore();
    const t = translations[language];

    return (
        <div className={scss.sponsorship}>
            <div className={scss.title}>{t.title}</div>
            <br/>

            <div className={scss.content}>
                <p>{t.greeting}</p>
                <p>{t.projectDescription}</p>
            </div>
            <br/>

            <div className={scss.subtitle}>{t.whySponsor}</div>
            <br/>

            <div className={scss.content}>
                <p className={scss.benefits}><span>{t.sponsorBenefits.point1}</span>{t.sponsorBenefits.point1Title}<br/>{t.sponsorBenefits.point1Description}</p>
                <p className={scss.benefits}><span>{t.sponsorBenefits.point2}</span>{t.sponsorBenefits.point2Title}<br/>{t.sponsorBenefits.point2Description}</p>
                <p className={scss.benefits}><span>{t.sponsorBenefits.point3}</span>{t.sponsorBenefits.point3Title}<br/>{t.sponsorBenefits.point3Description}</p>
            </div>
            <br/>

            <div className={scss.title}>{t.howToHelp}</div>
            <br/>

            <div className={scss.content}>
                <p>{t.howToHelpDescription}</p>
            </div>
            <br/>

            <div className={scss.title}>{t.contact}</div>
            <br/>

            <div className={scss.content}>
                <p>{t.contactEmail}</p>
            </div>
            <div className={scss.contactEmail}>
                    <a href={`mailto:${t.email}`} className={scss.contactLink}>{t.email}</a>
            </div>
            <br/>
            <div className={scss.content}>
            <p>{t.thanks}</p>
                <p>{t.regards}<br/>{t.team}</p>
            </div>
        </div>

    );
}

export default SupportSponsor;
