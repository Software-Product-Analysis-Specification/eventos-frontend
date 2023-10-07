import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import KeyCloakService from './modules/auth/KeycloakService';
import AppRoutes from './app/routing/AppRoutes';
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const renderApp = () =>
  root.render(
    <AppRoutes />
  );
KeyCloakService.CallLogin(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
