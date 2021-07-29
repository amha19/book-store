module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define(
        'Book',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            PublicationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tabelName: 'book',
        }
    );

    return Book;
};
