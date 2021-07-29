const { Sequelize, sequelize } = require('../service/db');

module.exports = () => {
    const Book = require(__dirname + '/book')(sequelize, Sequelize.DataTypes);
    const Category = require(__dirname + '/category')(
        sequelize,
        Sequelize.DataTypes
    );
    const Publisher = require(__dirname + '/publisher')(
        sequelize,
        Sequelize.DataTypes
    );
    const Book_Category = require(__dirname + '/book-category')(
        sequelize,
        Sequelize.DataTypes
    );
    const Author = require(__dirname + '/author')(
        sequelize,
        Sequelize.DataTypes
    );

    // associations

    Author.hasMany(Book, {
        onDelete: 'cascade',
    });
    Book.belongsTo(Author);

    Publisher.hasMany(Book, {
        onDelete: 'cascade',
    });
    Book.belongsTo(Publisher);

    Book.belongsToMany(Category, { through: Book_Category });
    Category.belongsToMany(Book, { through: Book_Category });

    sequelize.sync({ force: true }); //
};
