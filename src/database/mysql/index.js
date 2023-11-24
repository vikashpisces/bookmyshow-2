const { Sequelize } = require('sequelize');

let sequelize = null;

module.exports.getSequelize = function () {
  if(!sequelize) {
    createSequelize()
  }
  return sequelize
};

function createSequelize () {
  sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'book_my_show_2',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PWD,
    username: process.env.MYSQL_USER
  })
}