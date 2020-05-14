import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/index';
import routeConfig from './route/route.config';
import { BrowserRouter } from 'react-router-dom';
import { getAimComp } from './util';

const pathname = document.location.pathname;
const initialData = JSON.parse(document.getElementById('textareaSsrData').value);

const clientRender = () => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App pathname={pathname} initialData={initialData} routeConfig={routeConfig} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

const judgeAsync = () => {
  const route = getAimComp(routeConfig, pathname);
  const asyncLoad = route.component._load;
  if (asyncLoad) {
    asyncLoad().then(res => {
      route.component = res.default;
      clientRender();
    });
  } else {
    clientRender();
  }
};

judgeAsync();