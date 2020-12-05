'use strict';
const { Model } = require('sequelize');
// const User = require('./user');
module.exports = (sequelize, DataTypes) => {
	class Project extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Project.init(
		{
			companyName: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			projectsName: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: "",
			},
			previousTurnover: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: true,

			},
			actualTurnover: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: true,
			},
			dailyPeopleInvolved: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: true,
			},
			fundRaiseExpectation: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: true,
			},
			hasCampaign: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			webSiteLink: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			projectsDescription: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			hasAfricans: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			isRegistredCompany: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			isBasedInAfrica: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			generatesMoney: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			isSimplifiedActionCompany: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
			},
			isValid: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: 1,
			}
		},
		{
			sequelize,
			modelName: 'Project',
		}
	);
	return Project;
};
