const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const School = sequelize.define("School", {
  school_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  school_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  school_address: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = School;
