import { Request, Response } from "express";
import InvariantError from "../../exceptions/InvariantError";
import karyawanService from "../../services/KaryawanService";
import jabatanService from "../../services/JabatanService";
import NotFoundError from "../../exceptions/NotFoundError";

const createKaryawan = async (req: Request, res: Response) => {
  if (
    !req.body.hasOwnProperty("id_jabatan") ||
    !req.body.hasOwnProperty("name") ||
    !req.body.hasOwnProperty("age") ||
    !req.body.hasOwnProperty("gender") ||
    !req.body.hasOwnProperty("tanggal_lahir") ||
    !req.body.hasOwnProperty("alamat")
  ) {
    throw new InvariantError(
      "Please provide id_jabatan, name, age, gender, tanggal_lahir, and alamat"
    );
  }

  const { id_jabatan, name, age, gender, tanggal_lahir, alamat } = req.body;
  const jabatan = await jabatanService.getJabatanById(Number(id_jabatan));

  if (!jabatan) {
    throw new NotFoundError("Jabatan not found, please put correct id");
  }

  await karyawanService.createKaryawan({
    id_jabatan,
    name,
    age,
    gender,
    tanggal_lahir,
    alamat,
  });
  return res
    .status(201)
    .json({ status: "success", message: "Karyawan created successfully" });
};

export default createKaryawan;
