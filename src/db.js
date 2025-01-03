const DATABASE_URL = require("./config").DATABASE_URL;
const { Sequelize } = require("sequelize");
const db = new Sequelize(DATABASE_URL);
module.exports = db;
