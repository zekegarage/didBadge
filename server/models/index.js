"use strict";
const Sequelize = require("sequelize");

const User = require("./User");
const Coz = require("./Coz");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.user = User;
db.coz = Coz;

User.init(sequelize);
Coz.init(sequelize);

module.exports = db;
