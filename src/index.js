import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// style-scss 연동 (모든 scss 폴더를 가짐)
import './assets/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
