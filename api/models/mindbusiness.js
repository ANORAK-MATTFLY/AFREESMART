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
            mentors: {
                type: DataTypes.STRING,
                allowNull: true
            },
            doYouHaveSupport: {
                type: DataTypes.STRING,
                allowNull: true
            },
            howManyAreYou: {
                type: DataTypes.STRING,
                allowNull: true
            },
            companyFailures: {
                type: DataTypes.STRING,
                allowNull: true
            },
            PreviousCompaniesCard: {
                type: DataTypes.STRING,
                allowNull: true
            },
            twoQuestionsForThisPeople: {
                type: DataTypes.STRING,
                allowNull: true
            },
            threePeopleYouWouldLikeToMet: {
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
