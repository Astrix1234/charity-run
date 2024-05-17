import { StyledFooter } from './StyledFooter';
import { FooterInformationSection } from '../FooterInformationSection/FooterInformationSection';
import { FooterNavigation } from '../FooterNavigation/FooterNavigation';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import { FooterTitleEnglish } from '../FooterTitleEnglish/FooterTitleEnglish';

export const Footer = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  return (
    <StyledFooter as="footer">
      <div className="background-top"></div>
      <div className="background-bottom">
        <div className="container">
          <div>
            <img src={t.background} alt={t.alt} />
            {language === 'PL' && <FooterTitleEnglish />}
          </div>
          <FooterInformationSection />
          <FooterNavigation />
        </div>
      </div>
    </StyledFooter>
  );
};
