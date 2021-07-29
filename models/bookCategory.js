module.exports = (sequelize, DataTypes) => {
    const BookCategroy = sequelize.define(
        'BookCategroy',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
        },
        {
            tabelName: 'bookCategory',
        }
    );

    return BookCategroy;
};
