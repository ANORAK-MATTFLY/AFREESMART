'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ProjectStatus extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			ProjectStatus.hasMany(models.Project, {
				foreignKey: {
					allowNull: false,
					defaultValue: 1,
					name: 'projectStatusId',
				},
			});
			models.Project.belongsTo(ProjectStatus, {
				foreignKey: {
					allowNull: false,
					name: 'projectStatusId',
				},
			});
			models.Project.sync();
		}
	}
	ProjectStatus.init(
		{
			stateName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'ProjectStatus',
		}
	);
	return ProjectStatus;
};
