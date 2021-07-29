module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define(
        'Author',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tabelName: 'author',
        }
    );

    return Author;
};
