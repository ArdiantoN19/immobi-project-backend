import { Request, Response } from "express";
import NotFoundError from "../../exceptions/NotFoundError";
import jabatanService from "../../services/JabatanService";

const deleteJabatan = async (req: Request, res: Response) => {
  const { id } = req.params;

  const jabatan = await jabatanService.getJabatanById(Number(id));

  if (!jabatan) {
    throw new NotFoundError("Jabatan not found, please put correct id");
  }

  await jabatanService.deleteJabatan(Number(id));
  return res
    .status(200)
    .json({ status: "success", message: "Jabatan deleted successfully" });
};

export default deleteJabatan;
