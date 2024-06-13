import sequelize from "../utils/database";
import Department from "./Department";
import Jabatan from "./Jabatan";
import Karyawan from "./Karyawan";

const models = {
  Department,
  Jabatan,
  Karyawan,
};

// SYNC DATABASE AVOID WHEN PRODUCTION
const syncDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("Database synced");
};

export { sequelize, models, syncDatabase };
