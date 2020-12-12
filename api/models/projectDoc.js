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
                defaultValue: '',
            },
            companyLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            businessModelLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            comercialtLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            marketingtLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            managementLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            corporateLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            businessPlanLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            proofOfConceptLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            planFinancierLink: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            companyManagement: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            turnoverGrowth: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            projectLegalAuthorizations: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            fluxGrowth: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            teamProfile: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            companyVision: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            abilityToGenerateEmployment: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            cashFlowStatement: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            balanceSheet: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
            cR: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: '',
            },
        },
        {
            sequelize,
            modelName: 'ProjectDoc',
        }
    );
    return ProjectDoc;
};
