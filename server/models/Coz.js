"use strict";
const Sequelize = require("sequelize");

module.exports = class Coz extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        birthday: {
          type: Sequelize.STRING,
        },
        klip_address: {
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        modelName: "Coz",
        tableName: "Coz",
        timestamps: false,
        paranoid: false,
        underscored: true,
        charset: "utf8",
      }
    );
  }
};
