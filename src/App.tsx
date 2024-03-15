import { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
