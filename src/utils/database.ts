import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } =
  process.env as Record<string, any>;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  dialect: "postgres",
  host: PGHOST,
  port: PGPORT,
  define: {
    freezeTableName: true,
  },
  // logging: false,
});

export default sequelize;
