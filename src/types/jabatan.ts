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

export interface IJabatanService {
  getJabatans(): Promise<JabatanAttributes[]>;
  getJabatanById(id: number): Promise<JabatanAttributes | null>;
  createJabatan(data: JabatanCreationAttributes): Promise<void>;
  updateJabatan(
    id: number,
    data: Partial<JabatanCreationAttributes>
  ): Promise<void>;
  deleteJabatan(id: number): Promise<void>;
}
