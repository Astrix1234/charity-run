import { Helmet } from 'react-helmet-async';
import RestorePassword from '../../components/RestorePassword/RestorePassword';

function RestorePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Restore Password</title>
      </Helmet>
      <RestorePassword />
    </>
  );
}

export default RestorePasswordPage;
