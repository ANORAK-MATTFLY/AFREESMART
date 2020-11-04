'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasOne(models.Project, {
				foreignKey: 'userId',
				constraints: false,
			});
			models.Project.belongsTo(User, {
				foreignKey: 'userId',
				constraints: false,
			});
			models.Project.sync();
		}
	}
	User.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			acessToken: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue:null,
				unique: true,
			},
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
