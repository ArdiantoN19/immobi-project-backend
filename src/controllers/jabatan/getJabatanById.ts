import { Request, Response } from "express";
import NotFoundError from "../../exceptions/NotFoundError";
import jabatanService from "../../services/JabatanService";

const getJabatanById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const jabatan = await jabatanService.getJabatanById(Number(id));

  if (!jabatan) {
    throw new NotFoundError("Jabatan not found, please put correct id");
  }

  return res.status(200).json({ status: "success", data: jabatan });
};

export default getJabatanById;
