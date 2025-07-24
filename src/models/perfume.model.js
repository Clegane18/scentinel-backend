const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Perfume = sequelize.define(
  "Perfume",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING, // e.g., EDP, EDT
    },
    season: {
      type: DataTypes.STRING, // e.g., Summer, Winter, All-season
    },
    intensity: {
      type: DataTypes.STRING, // e.g., Fresh, Sweet, Woody
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "perfumes",
    timestamps: true,
  }
);

module.exports = Perfume;
