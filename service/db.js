const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookstore', 'postgres', 'amhas.4242', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

module.exports = { Sequelize, sequelize };
