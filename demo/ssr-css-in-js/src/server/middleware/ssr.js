import React from 'react';
import App from '../../client/route/index';
import routeConfig from '../../client/route/route.config';
import { matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ServerStyleSheet } from 'styled-components';
import { handleHtml } from '../util';

export default async (req, res, next) => {
  const { path, url } = req;

  if (url.indexOf('.') > -1) {
    return;
  };

  const branch = matchRoutes(routeConfig, path)[0];
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

  const sheet = new ServerStyleSheet();

  const reactStr = renderToString(
    sheet.collectStyles(
      <StaticRouter location={path} context={context}>
        <App />
      </StaticRouter>
    )
  );

  const htmlInfo = {
    reactStr,
    initialData: JSON.stringify(initialData),
    styles: sheet.getStyleTags()
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