import { useMediaQuery } from 'react-responsive';
import DesktopHeader from '../DesktopHeader/DesktopHeader';
import MobileHeader from '../MobileHeader/MobileHeader';

export const Header = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1360px)' });

  if (isDesktop) return <DesktopHeader />;

  return <MobileHeader />;
};
