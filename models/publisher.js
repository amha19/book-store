module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define(
        'Publisher',
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
            tabelName: 'publisher',
        }
    );

    return Publisher;
};
