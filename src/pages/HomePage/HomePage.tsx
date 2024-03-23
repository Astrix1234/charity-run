import { Helmet } from 'react-helmet-async';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import HematoFAQ from '../../components/HematoFAQ/HematoFAQ';

import Gallery from '../../components/Gallery/Gallery';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <Gallery />
      <HematoRunWhyIsItWorth />
      <HematoFAQ />
    </div>
  );
}
