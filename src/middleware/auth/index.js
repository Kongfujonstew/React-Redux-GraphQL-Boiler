import verifyLogin from './verifyLogin';

export default (req, res, next) => {
  console.log('autho triggered, cookies: ', req.cookies);
  console.log('autho, req.url: ', req.url);
  let loggedIn = true;  //add logic here; toggle for testing

  if (!loggedIn) {
    const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The react iso boiler</title>
        <link rel="stylesheet" href="/styles/styles.css">
        <link rel="icon" href="/favicon/image.png" type="image/x-icon">
    <!--     <link href="https://fonts.googleapis.com/css?family=Lato|Nothing+You+Could+Do" rel="stylesheet"> -->

      </head>
      <body>
        <div>hi you failed login</div>
      </body>
    </html>`

  res.write(template);
  res.end();


  } else {
    next();
  }
}