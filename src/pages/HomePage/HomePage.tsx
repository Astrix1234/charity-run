import { Helmet } from 'react-helmet-async';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <HematoRunInfo />
      <HematoRunWhyIsItWorth />
    </div>
  );
}
