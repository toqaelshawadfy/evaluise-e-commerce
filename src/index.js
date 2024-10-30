import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import'react-bootstrap/BootstrapModalManager/package.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Store/Stor';
const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient = new QueryClient()
root.render(
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
     </Provider>,
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
