import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import ReCaptchaProvider from './components/Common/ReCaptchaProvider';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReCaptchaProvider>
        <App />
      </ReCaptchaProvider>
    </BrowserRouter>
  </React.StrictMode>
);