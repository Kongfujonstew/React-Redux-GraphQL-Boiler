import admin from '../templates/admin';

export default (req, res) => {
  console.log('arrived')
  const template = admin;
  res.write(template);
  res.end();
};
