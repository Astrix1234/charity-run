import { Helmet } from 'react-helmet-async';
import NewPassword from '../../components/NewPassword/NewPassword';

function NewPasswordPage() {
  return (
    <>
      <Helmet>
        <title>New Password</title>
      </Helmet>
      <NewPassword />
    </>
  );
}

export default NewPasswordPage;
