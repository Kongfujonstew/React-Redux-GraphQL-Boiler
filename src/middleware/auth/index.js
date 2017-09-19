import verifyLogin from './verifyLogin';
import welcome from '../../templates/welcome';

export default (req, res, next) => {
  console.log('autho triggered, cookies: ', req.cookies);
  console.log('autho, req.url: ', req.url);
  let loggedIn = false;  //add logic here; toggle for testing

  if (!loggedIn) {
    const template = welcome;

    res.write(template);
    res.end();

  } else {
    next();
  }
}