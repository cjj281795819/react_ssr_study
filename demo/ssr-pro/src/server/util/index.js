
export const handleHtml = ({ reactStr, initialData, styles }) => {
  const jsKeys = ['libs.js', 'main.js'];
  const cssKeys = ['main.css'];

  let jsValues = [];
  let cssValues = [];

  if (__isDev) {
    jsValues = ['libs.index.js', 'index.js'];
    cssValues = ['index.css'];

  } else {
    const mainfest = require('@dist/mainfest.json');

    jsValues = jsKeys.map(v => mainfest[v]);
    cssValues = cssKeys.map(v => mainfest[v]);
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
      ${cssValues.map(v => `<link rel="stylesheet" href="${v}"></link>`).join('')}
  </head>
  <body>
      <div id="root">${reactStr}</div>
      <textarea id="textareaSsrData" style="display: none">${initialData}</textarea>
  </body>
  ${jsValues.map(v => `<script type="text/javascript" src="${v}"></script>`).join('')}
  </html>`
}