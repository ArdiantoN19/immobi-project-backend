import { Request, Response } from "express";
import karyawanService from "../../services/KaryawanService";

const getKaryawans = async (req: Request, res: Response) => {
  const karyawans = await karyawanService.getKaryawans();
  return res.status(200).json({ status: "success", data: karyawans });
};

export default getKaryawans;
