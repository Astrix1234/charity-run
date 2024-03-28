import { Helmet } from 'react-helmet-async';
import { Register } from '../../components/Register/Register';

export default function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Register />
    </div>
  );
}
