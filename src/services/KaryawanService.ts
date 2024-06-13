import { models } from "../models";
import {
  IKaryawanService,
  KaryawanAttributes,
  KaryawanCreationAttributes,
} from "../types/karyawan";

class KaryawanService implements IKaryawanService {
  private karyawanModel: any;
  constructor(karyawanModel: any) {
    this.karyawanModel = karyawanModel;
  }

  async getKaryawans(): Promise<KaryawanAttributes[]> {
    return await this.karyawanModel.findAll();
  }

  async getKaryawanById(id: number): Promise<KaryawanAttributes | null> {
    return await this.karyawanModel.findByPk(id);
  }

  async createKaryawan(data: KaryawanCreationAttributes): Promise<void> {
    await this.karyawanModel.create(data);
  }

  async updateKaryawan(
    id: number,
    data: Partial<KaryawanCreationAttributes>
  ): Promise<void> {
    await this.karyawanModel.update(data, { where: { id } });
  }

  async deleteKaryawan(id: number): Promise<void> {
    await this.karyawanModel.destroy({ where: { id } });
  }
}

const karyawanService = new KaryawanService(models.Karyawan);

export default karyawanService;
