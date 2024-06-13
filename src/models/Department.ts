import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database";
import Jabatan from "./Jabatan";
import {
  DepartmentAttributes,
  DepartmentCreationAttributes,
} from "../types/department";

class Department
  extends Model<DepartmentAttributes, DepartmentCreationAttributes>
  implements DepartmentAttributes
{
  public id!: number;
  public nama_department!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    nama_department: {
      type: DataTypes.STRING,
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
  {
    sequelize,
    modelName: "department",
  }
);

Department.hasMany(Jabatan, { as: "jabatans" });

export default Department;
