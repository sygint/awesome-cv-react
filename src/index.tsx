import React from 'react';
import ReactDOM from 'react-dom/client';

import Document from './components/Document';

import details from "./details.json";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Document details={details} />
  </React.StrictMode>
);
