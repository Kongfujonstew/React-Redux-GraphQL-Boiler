export default (header, footer, body) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The react iso boiler</title>
        <link rel="stylesheet" href="/styles/styles.css">
        <link rel="icon" href="/favicon/image.png" type="image/x-icon">
    <!--     <link href="https://fonts.googleapis.com/css?family=Lato|Nothing+You+Could+Do" rel="stylesheet"> -->
        <script src="/app.js" defer></script>
      </head>
      <body>
        ${header}
        <div id="main">${body}</div>
        ${footer}
      </body>
    </html>`
};
