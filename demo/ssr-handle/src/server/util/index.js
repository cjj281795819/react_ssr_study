
export const handleHtml = ({ reactStr, initialData }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="/index.css"></link>
  </head>
  <body>
      <div id="root">${reactStr}</div>
      <textarea id="textareaSsrData" style="display: none">${initialData}</textarea>
  </body>
  <script type="text/javascript" src="/libs.index.js"></script>
  <script type="text/javascript" src="/index.js"></script>
  </html>`
}