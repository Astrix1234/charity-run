import { Helmet } from 'react-helmet-async';
import RegistrationForRun from '../../components/RegistrationForRunAll/RegistrationForRun/RegistrationForRun';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { useUserDataStore } from '../../Zustand/useUserDataStore';
import { getCurrentUser } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';

export default function RegistrationForRunPage() {
  const navigate = useNavigate();
  const { isLogin } = useIsLoginStore();
  const { setIsLoading } = useIsLoadingStore();
  const { setUserData } = useUserDataStore();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await getCurrentUser();
        if (response) {
          setUserData(response);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Registration For Run</title>
      </Helmet>
      <RegistrationForRun />
    </>
  );
}
