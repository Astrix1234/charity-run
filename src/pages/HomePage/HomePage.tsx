import { Helmet } from 'react-helmet-async';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Haemato-run</title>
      </Helmet>
      <HematoRunMainTitle />
      <HematoRunInfo />
    </div>
  );
}
