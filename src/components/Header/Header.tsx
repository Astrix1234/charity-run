import { useMediaQuery } from 'react-responsive';
import DesktopHeader from '../DesktopHeader/DesktopHeader';
import MobileHeader from '../MobileHeader/MobileHeader';
import { useEffect } from 'react';

export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1360px)' });
  console.log(isDesktop);

  useEffect(() => {
    if (isDesktop) document.body.style.overflow = 'auto';
  }, [isDesktop]);

  if (isDesktop) return <DesktopHeader />;

  return <MobileHeader />;
};
