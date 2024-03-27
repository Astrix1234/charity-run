import { Helmet } from 'react-helmet-async';
import Contact from '../../components/Contact/Contact';

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Contact />
    </div>
  );
}
