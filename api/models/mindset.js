'use strict';
const { Model } = require('sequelize');
// const User = require('./user');
module.exports = (sequelize, DataTypes) => {
    class Mindset extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Mindset.init(
        {
            companyValues: {
                type: DataTypes.STRING,
                allowNull: true
            },
            family: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            thoughtOnTeamwork: {
                type: DataTypes.STRING,
                allowNull: true
            },
            thoughtOnAdvices: {
                type: DataTypes.STRING,
                allowNull: true
            },
            whyBecomeEnt: {
                type: DataTypes.STRING,
                allowNull: true
            },
            IfWrong: {
                type: DataTypes.STRING,
                allowNull: true
            },
            IfLate: {
                type: DataTypes.STRING,
                allowNull: true
            },
            IfYouGetStuck: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ifYouFaille: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ifYouHaveNoExp: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fiveKeyStrength: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fiveWeakness: {
                type: DataTypes.STRING,
                allowNull: true
            },
            relationShipWithMoney: {
                type: DataTypes.STRING,
                allowNull: true
            },
            education: {
                type: DataTypes.STRING,
                allowNull: true
            },

        },
        {
            sequelize,
            modelName: 'Mindset',
        }
    );
    return Mindset;
};
