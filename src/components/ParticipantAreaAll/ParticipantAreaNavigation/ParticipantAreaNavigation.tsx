import { StyledNavigation } from './StyledParticipantAreaNavigation';
import { useLanguageStore } from '../../../Zustand/useLanguageStore';
import translations from './translations';
import { Link, useNavigate } from 'react-router-dom';
import { useIsLoginStore } from '../../../Zustand/useIsLoginStore';
import { logout } from '../../../Zustand/api';
import { useIsLoadingStore } from '../../../Zustand/useIsLoadingStore';

export const ParticipantAreaNavigation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  const { setIsLogin } = useIsLoginStore();
  const { setIsLoading } = useIsLoadingStore();
  const navigate = useNavigate();

  const handleLogout = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const logoutUser = async () => {
      try {
        setIsLoading(true);
        await logout();
        setIsLogin(false);
        navigate('/');
      } catch (error) {
        console.error('Error logging out:', error);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLogin(false);
    logoutUser();
  };

  return (
    <StyledNavigation className="navigation">
      <h1>{t.myProfile}</h1>
      <h2>{t.navigation}</h2>
      <p>
        <Link to="/participant-area/#my-data">{t.myData} /01</Link>
      </p>
      <p>
        <Link to="/participant-area/#my-data">{t.myResult} /02</Link>
      </p>
      <p>
        <Link to="/participant-area/#run-info">{t.timetable} /03</Link>
      </p>
      <p>
        <Link to="/participant-area/#before-run">{t.getReady} /04</Link>
      </p>
      <p>
        <a href="#" onClick={handleLogout}>
          {t.logout} /05
        </a>
      </p>
    </StyledNavigation>
  );
};
