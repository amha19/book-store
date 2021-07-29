const { Sequelize, sequelize } = require('../service/db');

const Publisher = sequelize.define(
    'Publisher',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        underscored: true,
        tableName: 'publisher',
    }
);

module.exports = Publisher;
