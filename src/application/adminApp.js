import header from '../templates/header';
import footer from '../templates/footer';

export default (req, res) => {
  const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The react iso boiler Admin page</title>
        <link rel="stylesheet" href="/styles/graphiql.css">
      </head>
      <body>
        <div id="admin"></div>
        <script src="/admin.js" type="text/javascript"></script>
      </body>
    </html>`

  res.write(template);
  res.end();
};
