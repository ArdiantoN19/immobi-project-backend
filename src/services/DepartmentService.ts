import Department from "../models/Department";
import {
  DepartmentCreationAttributes,
  IDepartmentService,
} from "../types/department";

class DepartmentService implements IDepartmentService {
  private DepartmentModel: any;
  constructor(DepartmentModel: any) {
    this.DepartmentModel = DepartmentModel;
  }

  async getDepartments() {
    return await this.DepartmentModel.findAll();
  }

  async getDepartmentById(id: number) {
    return await this.DepartmentModel.findByPk(id);
  }

  async createDepartment(data: DepartmentCreationAttributes) {
    return await this.DepartmentModel.create(data);
  }

  async updateDepartment(
    id: number,
    data: Partial<DepartmentCreationAttributes>
  ) {
    return await this.DepartmentModel.update(data, { where: { id } });
  }

  async deleteDepartment(id: number) {
    return await this.DepartmentModel.destroy({ where: { id } });
  }
}

const departmentService = new DepartmentService(Department);

export default departmentService;
