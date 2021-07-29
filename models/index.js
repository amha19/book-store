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
    const BookCategory = require(__dirname + '/bookCategory')(
        sequelize,
        Sequelize.DataTypes
    );
    const Author = require(__dirname + '/author')(
        sequelize,
        Sequelize.DataTypes
    );

    /*
     *
     * TODO add any additional models here.
     *
     */

    // global.db.Install.belongsTo(global.db.Campaign, {
    //     onDelete: 'cascade',
    //     foreignKey: 'campaign_id',
    // });

    /*
     *
     * TODO add any additional relationships between models here.
     *
     */

    Author.hasMany(Book, {
        onDelete: 'cascade',
    });
    Book.belongsTo(Author);

    Publisher.hasMany(Book, {
        onDelete: 'cascade',
    });
    Book.belongsTo(Publisher);

    Book.belongsToMany(Category, { through: BookCategory });
    Category.belongsToMany(Book, { through: BookCategory });

    sequelize.sync({ force: true }); //
};
