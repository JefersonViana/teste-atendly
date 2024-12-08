"use strict";
require("dotenv/config");
const sequelize_1 = require("sequelize");
const config = {
    username: 'root',
    password: 'password',
    database: 'atendly',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
const sequelize = new sequelize_1.Sequelize(config);
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
module.exports = config;
