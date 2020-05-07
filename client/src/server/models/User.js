const { Sequelize } = require("sequelize");

module.exports = {
  id: { type: Sequelize.NUMBER, allowNull: false, primaryKey: true },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    // allowNull defaults to true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ip_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};
