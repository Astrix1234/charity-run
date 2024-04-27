import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CountdownTimer } from '../../components/CountdownTimer/CountdownTimer';
import { HematoRunMainTitle } from '../../components/HematoRunMainTitle/HematoRunMainTitle';
import { HematoRunRoute } from '../../components/HematoRunRoute/HematoRunRoute';
import { HematoRunInfo } from '../../components/HematoRunInfo/HematoRunInfo';
import { HematoRunWhyIsItWorth } from '../../components/HematoRunWhyIsItWorth/HematoRunWhyIsItWorth';
import HematoFAQ from '../../components/HematoFAQ/HematoFAQ';
import Attractions from '../../components/HematoRunAttractions/HematoRunAttractions';
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';
import Sponsors from '../../components/Sponsors/Sponsors';
import { Timetable } from '../../components/Timetable/Timetable';

export default function HomePage() {
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
        <title>Hemato Run</title>
      </Helmet>
      <CountdownTimer />
      <HematoRunMainTitle />
      <HematoRunInfo />
      <GalleryCarousel />
      <Timetable />
      <HematoRunRoute />
      <HematoRunWhyIsItWorth />
      <Attractions />
      <Sponsors />
      <HematoFAQ />
    </div>
  );
}
