import SupportHeading from '../SupportHeading/SupportHeading';
import SupportSubHeading from '../SupportSubHeading/SupportSubHeading';
import SupportSponsorText from '../SupportSponsorText/SupportSponsorText';
import scss from './SupportSponsor.module.scss';


function SupportSponsor() {
    return (
        <section className={scss.section}>
            <div className={scss.container}>
                <div className={scss.heading}>
                <SupportHeading
                    headingText={{
                        pl: 'Wesprzyj Fundację i zostań Sponsorem',
                        eng: 'Support the Foundation and become a Sponsor',
                    }}
                /></div>
                <SupportSubHeading
                subText={{
                    pl: 'Pomóż nam w realizacji celów Fundacji oraz wesprzyj organizacje',
                    eng: 'Help us achieve the goals of the Foundation and support the organization',
                }}
                mainText={{ pl: 'Hematobiegu', eng: 'Hematorun' }}
                />
            </div>
            <SupportSponsorText />
            
            </section>
        );
    }

export default SupportSponsor;
