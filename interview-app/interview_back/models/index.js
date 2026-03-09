"use strict";

const Sequelize = require("sequelize");
const db = {};

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Users = require("./Users")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Users = Users;

module.exports = db;
