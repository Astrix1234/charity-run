import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import CookiesBanner from './components/CookiesBanner/CookiesBanner.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={'/charity-run/'}>
    <App />
    <CookiesBanner />
  </BrowserRouter>
);
