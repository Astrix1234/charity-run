import { Helmet } from 'react-helmet-async';
import { ParticipantArea } from '../../components/ParticipantArea/ParticipantArea';

export default function ParticipantAreaPage() {
  return (
    <div>
      <Helmet>
        <title>Participant Area</title>
      </Helmet>
      <ParticipantArea />
    </div>
  );
}
