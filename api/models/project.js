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
			Project.hasOne(models.User, {
				as: 'Projects',
				foreignKey: 'projectId',
				allowNull: false,
			});
			models.User.belongsTo(Project, {
				foreignKey: 'projectId',
				allowNull: false,
			});
			models.User.sync();
		}
	}
	Project.init(
		{
			companyName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			projectsName: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			webSiteLink: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			projectsDescription: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'Project',
		}
	);
	return Project;
};
