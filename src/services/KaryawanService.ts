import { models } from "../models";
import {
  IKaryawanService,
  KaryawanCreationAttributes,
} from "../types/karyawan";

class KaryawanService implements IKaryawanService {
  private karyawanModel: any;
  constructor(karyawanModel: any) {
    this.karyawanModel = karyawanModel;
  }

  async getKaryawans() {
    return await this.karyawanModel.findAll();
  }

  async getKaryawanById(id: number) {
    return await this.karyawanModel.findByPk(id);
  }

  async createKaryawan(data: KaryawanCreationAttributes) {
    return await this.karyawanModel.create(data);
  }

  async updateKaryawan(id: number, data: Partial<KaryawanCreationAttributes>) {
    return await this.karyawanModel.update(data, { where: { id } });
  }

  async deleteKaryawan(id: number) {
    return await this.karyawanModel.destroy({ where: { id } });
  }
}

const karyawanService = new KaryawanService(models.Karyawan);

export default karyawanService;
