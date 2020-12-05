'use strict';
const { Model } = require('sequelize');
// const User = require('./user');
module.exports = (sequelize, DataTypes) => {
    class AbilityToManageMoney extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    AbilityToManageMoney.init(
        {
            moneyInBank: {
                type: DataTypes.STRING,
                allowNull: true
            },
            debt: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            sequelize,
            modelName: 'AbilityToManageMoney',
        }
    );
    return AbilityToManageMoney;
};
