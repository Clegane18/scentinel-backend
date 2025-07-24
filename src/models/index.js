const Perfume = require("./Perfume");
const PerfumeUsageLog = require("./PerfumeUsageLog");

Perfume.hasMany(PerfumeUsageLog, {
  foreignKey: "perfumeId",
  as: "usageLogs",
});

PerfumeUsageLog.belongsTo(Perfume, {
  foreignKey: "perfumeId",
  as: "perfume",
});

module.exports = {
  Perfume,
  PerfumeUsageLog,
};
