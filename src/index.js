import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import Store from '../src/Task//redux/store';
import './index.css';
import KiranMaiRoutes from './KiranMaiRoutes';
import reportWebVitals from './reportWebVitals';
import Routing from './Routing/routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <Routing />
    <KiranMaiRoutes/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
