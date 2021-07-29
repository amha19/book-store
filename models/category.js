const { Sequelize, sequelize } = require('../service/db');

const Category = sequelize.define(
    'Category',
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
        tableName: 'category',
    }
);

module.exports = Category;
