import { Helmet } from 'react-helmet-async';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const verified = searchParams.get('verified');
    if (verified === 'true') {
      toast.info('Your account has been successfully verified. Please log in.');
    } else if (verified === 'false') {
      toast.error(
        'Account verification failed. Please try again or contact support.'
      );
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginComponent />
    </div>
  );
}
