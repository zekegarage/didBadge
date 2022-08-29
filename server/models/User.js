"use strict";
const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				address: {
					type: Sequelize.STRING
				},
				test_address: {
					type: Sequelize.STRING
				}
			},
			{
				sequelize,
				modelName: "User",
				tableName: "User",
				timestamps: false,
				paranoid: false,
				underscored: true,
				charset: "utf8",
			}
		);
	}
};
