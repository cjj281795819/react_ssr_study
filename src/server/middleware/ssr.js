import React from 'react';
import App from '../../client/route/index';
import routeConfig from '../../client/route/route.config';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { handleHtml, getStaticRoute } from '../util';
//import { ServerStyleSheet } from 'styled-components';

let staticRoute = [];
(async () => {
  staticRoute = await getStaticRoute(routeConfig);
})();

export default async (req, res, next) => {
  const { path, url } = req;

  if (url.indexOf('.') > -1) {
    return;
  }

  const branch = matchRoutes(staticRoute, path)[0];
  let component = {};

  if (branch) {
    component = branch.route.component;
  };

  let initialData = {};

  if (component.preFetch) {
    initialData = await component.preFetch();
  };

  const context = {
    initialData
  };

  //const sheet = new ServerStyleSheet();

  // const reactStr = renderToString(
  //   sheet.collectStyles(
  //     <StaticRouter location={path} context={context}>
  //       <App />
  //     </StaticRouter>
  //   )
  // );

  const reactStr = renderToString(
    <StaticRouter location={path} context={context}>
      <App routeConfig={staticRoute} />
    </StaticRouter>
  );

  const htmlInfo = {
    reactStr,
    //styles: sheet.getStyleTags(),
    initialData: JSON.stringify(initialData)
  };

  if (context.url) {
    res.writeHead(302, {
      location: context.url
    });
    res.end();
  } else {
    const html = handleHtml(htmlInfo);
    res.send(html);
  }

  return next();
};