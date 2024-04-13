import { Helmet } from 'react-helmet-async';
import RegistrationForRun from '../../components/RegistrationForRun/RegistrationForRun';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';

export default function RegistrationForRunPage() {
  const navigate = useNavigate();
  const { isLogin } = useIsLoginStore();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <Helmet>
        <title>Registration For Run</title>
      </Helmet>
      <RegistrationForRun />
    </>
  );
}
