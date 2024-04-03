import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ParticipantArea } from '../../components/ParticipantArea/ParticipantArea';

export default function ParticipantAreaPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div>
      <Helmet>
        <title>Participant Area</title>
      </Helmet>
      <ParticipantArea />
    </div>
  );
}
