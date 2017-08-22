import { sequelize } from 'sequelize';

export default (sequelize, Datatypes) => {
  const Bolly = sequelize.define("Bolly", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    memberid: Datatypes.STRING,
    title: Datatypes.STRING,
    youtubeurl: Datatypes.STRING,
    streamtime: {type: Datatypes.STRING, default: "0"},
    jsondata: Datatypes.JSONB
  });
  return Bolly;
};
