import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../HeaderAll/Header/Header';
import { Footer } from '../FooterAll/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
