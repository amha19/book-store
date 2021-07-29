const { Sequelize, sequelize } = require('../service/db');

const BookCategroy = sequelize.define(
    'BookCategroy',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
    },
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        underscored: true,
        tableName: 'book_category',
    }
);

module.exports = BookCategroy;
