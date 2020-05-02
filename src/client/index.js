import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/index';
import { BrowserRouter } from 'react-router-dom';

const pathname = document.location.pathname;
const initialData = JSON.parse(document.getElementById('textareaSsrData').value);


ReactDOM.hydrate(
  <BrowserRouter>
    <App pathname={pathname} initialData={initialData} />
  </BrowserRouter>,
  document.getElementById('root')
);