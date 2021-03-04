const Sequelize = require('sequelize');
const sequelize = new Sequelize('pontoeletronico', 'root', '', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
