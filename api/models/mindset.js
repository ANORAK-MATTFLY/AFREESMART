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
            motivations: {
                type: DataTypes.STRING,
                allowNull: true
            },
            family: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            education: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ethic: {
                type: DataTypes.STRING,
                allowNull: true
            },
            philosophies: {
                type: DataTypes.STRING,
                allowNull: true
            },
            diploma: {
                type: DataTypes.STRING,
                allowNull: true
            },
            strength: {
                type: DataTypes.STRING,
                allowNull: true
            },
            weaknesses: {
                type: DataTypes.STRING,
                allowNull: true
            },
            ambitions: {
                type: DataTypes.STRING,
                allowNull: true
            },
            achievements: {
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
