import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppLoader from '../src/components/App/AppLoader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLoader />
  </StrictMode>,
);