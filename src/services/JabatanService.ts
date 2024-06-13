import Jabatan from "../models/Jabatan";
import { IJabatanService, JabatanCreationAttributes } from "../types/jabatan";

class JabatanService implements IJabatanService {
  private jabatanModel: any;
  constructor(jabatanModel: any) {
    this.jabatanModel = jabatanModel;
  }

  async getJabatans() {
    return await this.jabatanModel.findAll();
  }

  async getJabatanById(id: number) {
    return await this.jabatanModel.findByPk(id);
  }

  async createJabatan(data: JabatanCreationAttributes) {
    return await this.jabatanModel.create(data);
  }

  async updateJabatan(id: number, data: Partial<JabatanCreationAttributes>) {
    return await this.jabatanModel.update(data, { where: { id } });
  }

  async deleteJabatan(id: number) {
    return await this.jabatanModel.destroy({ where: { id } });
  }
}

const jabatanService = new JabatanService(Jabatan);

export default jabatanService;
