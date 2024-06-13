import { models } from "../models";
import {
  DepartmentAttributes,
  DepartmentCreationAttributes,
  IDepartmentService,
} from "../types/department";

class DepartmentService implements IDepartmentService {
  private DepartmentModel: any;
  constructor(DepartmentModel: any) {
    this.DepartmentModel = DepartmentModel;
  }

  async getDepartments(): Promise<DepartmentAttributes[]> {
    return await this.DepartmentModel.findAll();
  }

  async getDepartmentById(id: number): Promise<DepartmentAttributes | null> {
    return await this.DepartmentModel.findByPk(id);
  }

  async createDepartment(data: DepartmentCreationAttributes): Promise<void> {
    await this.DepartmentModel.create(data);
  }

  async updateDepartment(
    id: number,
    data: Partial<DepartmentCreationAttributes>
  ): Promise<void> {
    await this.DepartmentModel.update(data, { where: { id } });
  }

  async deleteDepartment(id: number): Promise<void> {
    await this.DepartmentModel.destroy({ where: { id } });
  }
}

const departmentService = new DepartmentService(models.Department);

export default departmentService;
