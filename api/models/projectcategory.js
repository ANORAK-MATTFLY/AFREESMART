'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class ProjectCategory extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			ProjectCategory.hasMany(models.Project, {
				foreignKey: {
					allowNull: false,
					name: 'projectCategoryId',
				},
			});
			models.Project.belongsTo(ProjectCategory, {
				foreignKey: {
					allowNull: false,
					name: 'projectCategoryId',
				},
			});
			models.Project.sync();
		}
	}
	ProjectCategory.init(
		{
			categoryName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: 'ProjectCategory',
		}
	);
	return ProjectCategory;
};
