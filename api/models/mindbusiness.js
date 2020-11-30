'use strict';
const { Model } = require('sequelize');
// const User = require('./user');
module.exports = (sequelize, DataTypes) => {
    class BusinessMind extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            BusinessMind.hasOne(models.User, {
                as: 'BusinessMinds',
                foreignKey: 'businessMindId',
                allowNull: false,
            });
            models.User.belongsTo(BusinessMind, {
                foreignKey: 'businessMindId',
                allowNull: false,
            });
            models.User.sync();
        }
    }
    BusinessMind.init(
        {
            idol: {
                type: DataTypes.STRING,
                allowNull: true
            },
            careerAchievement: {
                type: DataTypes.STRING,
                allowNull: true
            },
            companyCreatedPreviously: {
                type: DataTypes.STRING,
                allowNull: true
            },
            failuresAsEntrepreneur: {
                type: DataTypes.STRING,
                allowNull: true
            },
            numberOfEmployeesManaged: {
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            sequelize,
            modelName: 'BusinessMind',
        }
    );
    return BusinessMind;
};
