import { Optional } from "sequelize";

export interface KaryawanAttributes {
  id: number;
  id_jabatan: number;
  name: string;
  age: number;
  gender: string;
}

export interface KaryawanCreationAttributes
  extends Optional<KaryawanAttributes, "id"> {}

export interface IKaryawanService {
  getKaryawans(): Promise<KaryawanAttributes[]>;
  getKaryawanById(id: number): Promise<KaryawanAttributes | null>;
  createKaryawan(data: KaryawanCreationAttributes): Promise<void>;
  updateKaryawan(
    id: number,
    data: Partial<KaryawanCreationAttributes>
  ): Promise<void>;
  deleteKaryawan(id: number): Promise<void>;
}
