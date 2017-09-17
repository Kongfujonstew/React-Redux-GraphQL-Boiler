export default (req, res, next) => {
  console.log('verfiying login');
  if (true) { //if login is successful (need to add logic here)

    //create a cookie and log user in

    res.redirect('/');
    res.end();
  } else {
    next();
  }
};
