import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Cookie from './components/Cookies/Cookies.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={'/charity-run/'}>
    <App />
    <Cookie />
  </BrowserRouter>
);
