import { Optional } from "sequelize";

export interface DepartmentAttributes {
  id: number;
  nama_department: string;
}

export interface DepartmentCreationAttributes
  extends Optional<DepartmentAttributes, "id"> {}

export interface IDepartmentService {
  getDepartments(): Promise<DepartmentAttributes[]>;
  getDepartmentById(id: number): Promise<DepartmentAttributes | null>;
  createDepartment(data: DepartmentCreationAttributes): Promise<void>;
  updateDepartment(
    id: number,
    data: Partial<DepartmentCreationAttributes>
  ): Promise<void>;
  deleteDepartment(id: number): Promise<void>;
}
