import { Helmet } from 'react-helmet-async';
import RegistrationForRun from '../../components/RegistrationForRun/RegistrationForRun';

export default function RegistrationForRunPage() {
  return (
    <>
      <Helmet>
        <title>Registration For Run</title>
      </Helmet>
      <RegistrationForRun />
    </>
  );
}
