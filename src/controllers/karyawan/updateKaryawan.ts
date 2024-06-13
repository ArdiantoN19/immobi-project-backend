import { Request, Response } from "express";
import NotFoundError from "../../exceptions/NotFoundError";
import InvariantError from "../../exceptions/InvariantError";
import karyawanService from "../../services/KaryawanService";
import jabatanService from "../../services/JabatanService";

const updateKaryawan = async (req: Request, res: Response) => {
  const { id } = req.params;

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

  const karyawan = await karyawanService.getKaryawanById(Number(id));

  if (!karyawan) {
    throw new NotFoundError("Karyawan not found, please put correct id");
  }

  await karyawanService.updateKaryawan(Number(id), {
    id_jabatan,
    name,
    age,
    gender,
    tanggal_lahir,
    alamat,
  });
  return res
    .status(200)
    .json({ status: "success", message: "Karyawan updated successfully" });
};

export default updateKaryawan;
