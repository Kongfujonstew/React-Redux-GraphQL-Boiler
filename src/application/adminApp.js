import admin from '../templates/admin';

export default (req, res) => {
  const template = admin;
  res.write(template);
  res.end();
};
