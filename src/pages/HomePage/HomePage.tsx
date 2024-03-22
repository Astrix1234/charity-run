import { Helmet } from 'react-helmet-async';
import Gallery from '../../components/Gallery/Gallery';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <h1>Hello Word 😜</h1>
      <Gallery />
    </div>
  );
}
