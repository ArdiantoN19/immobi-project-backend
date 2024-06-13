import { Sequelize } from "sequelize";
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } =
  process.env as unknown as Record<string, any>;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  dialect: "postgres",
  host: PGHOST,
  port: PGPORT,
  define: {
    freezeTableName: true,
  },
});

export default sequelize;
