const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PerfumeUsageLog = sequelize.define(
  "PerfumeUsageLog",
  {
    perfumeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "perfumes",
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event: {
      type: DataTypes.STRING, // e.g., "Gym", "Work"
      allowNull: true,
    },
    comment: {
      type: DataTypes.TEXT, // Short log, note, or thoughts
      allowNull: true,
    },
  },
  {
    tableName: "perfume_usage_logs",
    timestamps: true,
  }
);

module.exports = PerfumeUsageLog;
