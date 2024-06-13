import { Optional } from "sequelize";

export interface KaryawanAttributtes {
  id: number;
  id_jabatan: number;
  name: string;
  age: number;
  gender: number;
  created_at: Date;
  updated_at: Date;
}

export interface KaryawanCreationAttributes
  extends Optional<KaryawanAttributtes, "id"> {}
