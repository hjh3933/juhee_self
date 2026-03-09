"use strict";

const Sequelize = require("sequelize");
const db = {};

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Users = require("./Users")(sequelize, Sequelize);
const Quizzes = require("./Quizzes")(sequelize, Sequelize);
const QuizChoices = require("./QuizChoices")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Users = Users;
db.Quizzes = Quizzes;
db.QuizChoices = QuizChoices;

// 관계설정
Quizzes.hasMany(QuizChoices, { foreignKey: "quizId" });
QuizChoices.belongsTo(Quizzes, { foreignKey: "quizId" });

module.exports = db;
