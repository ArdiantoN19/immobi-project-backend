import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import Jabatan from "./Jabatan";
import {
  KaryawanAttributes,
  KaryawanCreationAttributes,
} from "../types/karyawan";

class Karyawan
  extends Model<KaryawanAttributes, KaryawanCreationAttributes>
  implements KaryawanAttributes
{
  public id!: number;
  public id_jabatan!: number;
  public name!: string;
  public age!: number;
  public gender!: string;
  public tanggal_lahir!: Date;
  public alamat!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "karyawan" }
);

Karyawan.belongsTo(Jabatan, { foreignKey: "id_jabatan" });

export default Karyawan;
