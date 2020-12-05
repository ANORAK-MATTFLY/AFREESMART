'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProjectDoc extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }

    }
    ProjectDoc.init(
        {
            contextLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            companyLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            businessModelLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            comercialtLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            marketingtLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            managementLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            corporateLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            businessPlanLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            proofOfConceptLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
            planFinancierLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: 'no',
            },
        },
        {
            sequelize,
            modelName: 'ProjectDoc',
        }
    );
    return ProjectDoc;
};
