const { Sequelize, sequelize } = require('../service/db');

const Author = sequelize.define(
    'Author',
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
        tableName: 'author',
    }
);

module.exports = Author;
