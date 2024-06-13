import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import Department from "./Department";
import { JabatanAttributes, JabatanCreationAttributes } from "../types/jabatan";

class Jabatan
  extends Model<JabatanAttributes, JabatanCreationAttributes>
  implements JabatanAttributes
{
  public id!: number;
  public id_department!: number;
  public nama_jabatan!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Jabatan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    id_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama_jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "jabatan" }
);

Jabatan.belongsTo(Department, {
  foreignKey: "id_department",
});

export default Jabatan;
