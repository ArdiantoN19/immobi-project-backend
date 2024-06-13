import { Optional } from "sequelize";

export interface JabatanAttributes {
  id: number;
  id_department: number;
  nama_jabatan: string;
  created_at: Date;
  updated_at: Date;
}

export interface JabatanCreationAttributes
  extends Optional<JabatanAttributes, "id"> {}
