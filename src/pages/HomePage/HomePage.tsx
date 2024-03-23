import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunRoute } from '../../components/HematoRunRoute/HematoRunRoute';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import Gallery from '../../components/Gallery/Gallery';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <Gallery />
      <HematoRunRoute />
      <HematoRunWhyIsItWorth />
    </div>
  );
}
