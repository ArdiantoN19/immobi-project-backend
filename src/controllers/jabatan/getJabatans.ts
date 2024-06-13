import { Request, Response } from "express";
import jabatanService from "../../services/JabatanService";

const getJabatans = async (req: Request, res: Response) => {
  const jabatan = await jabatanService.getJabatans();
  return res.status(200).json({ status: "success", data: jabatan });
};

export default getJabatans;
