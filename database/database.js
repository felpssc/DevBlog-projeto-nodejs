const { Sequelize } = require('sequelize');

const connection = new Sequelize('devblog', 'root', '1258', {
  host: '127.0.0.1',
  dialect: 'mysql'
});


module.exports = connection;