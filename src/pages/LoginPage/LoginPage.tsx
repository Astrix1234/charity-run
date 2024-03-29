import { Helmet } from 'react-helmet-async';
import LoginComponent from '../../components/LoginComponent/LoginComponent';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginComponent />
    </div>
  );
}
