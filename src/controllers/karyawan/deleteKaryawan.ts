import { Request, Response } from "express";
import NotFoundError from "../../exceptions/NotFoundError";
import karyawanService from "../../services/KaryawanService";

const deleteKaryawan = async (req: Request, res: Response) => {
  const { id } = req.params;

  const karyawan = await karyawanService.getKaryawanById(Number(id));

  if (!karyawan) {
    throw new NotFoundError("Karyawan not found, please put correct id");
  }

  await karyawanService.deleteKaryawan(Number(id));
  return res
    .status(200)
    .json({ status: "success", message: "Karyawan deleted successfully" });
};

export default deleteKaryawan;
