import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JobProvider>
        <App />
      </JobProvider>
    </BrowserRouter>
  </React.StrictMode>
);
