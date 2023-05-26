import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
import ReposProvider from './context/ReposProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ReposProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </ReposProvider>
    </AuthProvider>
  </BrowserRouter>,
);
