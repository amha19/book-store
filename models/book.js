const { Sequelize, sequelize } = require('../service/db');

const Book = sequelize.define(
    'Book',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        PublicationYear: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        underscored: true,
        tableName: 'book',
    }
);

module.exports = Book;
