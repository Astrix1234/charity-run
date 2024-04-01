import { Helmet } from 'react-helmet-async';
import SupportVolunteers from '../../components/SupportVolunteers/SupportVolunteers';

export default function SupportVolunteersPage() {
  return (
    <div>
      <Helmet>
        <title>Become a Volunteer</title>
      </Helmet>
      <SupportVolunteers />
    </div>
  );
}
