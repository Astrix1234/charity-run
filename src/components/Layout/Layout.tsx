import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
// import { useMediaQuery } from 'react-responsive';

export const Layout = () => {
  // const isDesktop = useMediaQuery({ minWidth: 1360 });

  return (
    <>
      <Header />
      {/* {isDesktop && <Header />} */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
