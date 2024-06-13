import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import Jabatan from "./Jabatan";
import {
  KaryawanAttributtes,
  KaryawanCreationAttributes,
} from "../types/karyawan";

class Karyawan
  extends Model<KaryawanAttributtes, KaryawanCreationAttributes>
  implements KaryawanAttributtes
{
  public id!: number;
  public id_jabatan!: number;
  public name!: string;
  public age!: number;
  public gender!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Karyawan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    id_jabatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: "karyawan" }
);

Karyawan.belongsTo(Jabatan, { foreignKey: "id_jabatan" });

export default Karyawan;
