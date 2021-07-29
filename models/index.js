const { Sequelize, sequelize } = require('../service/db');

const book = require(__dirname + '/book')(sequelize, Sequelize.DataTypes);
const category = require(__dirname + '/category')(
    sequelize,
    Sequelize.DataTypes
);
const publisher = require(__dirname + '/publisher')(
    sequelize,
    Sequelize.DataTypes
);
const bookCategory = require(__dirname + '/bookCategory')(
    sequelize,
    Sequelize.DataTypes
);
const author = require(__dirname + '/author')(sequelize, Sequelize.DataTypes);

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
