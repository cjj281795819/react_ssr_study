
export const handleHtml = ({ reactStr, initialData, styles }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
      ${styles}
  </head>
  <body>
      <div id="root">${reactStr}</div>
      <textarea id="textareaSsrData" style="display: none">${initialData}</textarea>
  </body>
  <script type="text/javascript" src="/index.js"></script>
  </html>`
}