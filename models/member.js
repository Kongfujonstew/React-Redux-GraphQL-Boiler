import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Member = sequelize.define("Member", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    membername: { type: Datatypes.STRING, unique: 'true' },
    memberpassword: Datatypes.STRING,
    bollyid: Datatypes.INTEGER
  });
  return Member;
};
