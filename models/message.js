import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Message = sequelize.define("Message", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    time: Datatypes.TIME,
    memberid: Datatypes.STRING,
    bollyid: Datatypes.INTEGER,
    text: Datatypes.STRING,
  });
  return Message;
};
