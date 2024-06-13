import { IDepartmentService } from "../types/department";

class DepartmentService implements IDepartmentService {
  private DepartmentModel: any;
  constructor(DepartmentModel: any) {
    this.DepartmentModel = DepartmentModel;
  }

  async getDepartments() {
    return await this.DepartmentModel.findAll();
  }
}
