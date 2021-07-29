module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'Category',
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
            tabelName: 'category',
        }
    );

    return Category;
};
