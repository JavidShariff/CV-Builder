import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import SetContext from "./context/SetContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <SetContext>
        <App />
      </SetContext>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
