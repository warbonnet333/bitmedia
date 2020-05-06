const { Sequelize } = require("sequelize");

module.exports = {
  user_id: {
    type: Sequelize.NUMBER,
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: {
    //   model: User,
    //   key: "id",
    // },
  },
  date: { type: Sequelize.NUMBER, allowNull: true },
  page_views: { type: Sequelize.NUMBER, allowNull: true },
  clicks: { type: Sequelize.NUMBER, allowNull: true },
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
    field: "id",
    unique: true,
  },
};
