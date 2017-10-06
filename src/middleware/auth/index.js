import verifyLogin from './verifyLogin';

export default (req, res, next) => {
  console.log('autho triggered, cookies: ', req.cookies);
  console.log('autho, req.url: ', req.url);
  let loggedIn = false;  //add logic here; toggle for testing

  if (!loggedIn) {
    const template = 'You are not logged in! This message set in src/middleware/auth/index.js';

    res.write(template);
    res.end();

  } else {
    next();
  }
}