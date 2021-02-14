'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CompanyType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            CompanyType.hasMany(models.Project, {
                foreignKey: {
                    allowNull: false,
                    defaultValue: 1,
                    name: 'typeId',
                },
            });
            models.Project.belongsTo(CompanyType, {
                foreignKey: {
                    allowNull: false,
                    name: 'typeId',
                },
            });
            models.Project.sync();
        }
    }
    CompanyType.init(
        {
            typeName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'CompanyType',
        }
    );
    return CompanyType;
};
