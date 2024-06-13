import { Request, Response } from "express";
import InvariantError from "../../exceptions/InvariantError";
import jabatanService from "../../services/JabatanService";
import NotFoundError from "../../exceptions/NotFoundError";
import departmentService from "../../services/DepartmentService";

const updateJabatan = async (req: Request, res: Response) => {
  if (
    !req.body.hasOwnProperty("id_department") ||
    !req.body.hasOwnProperty("nama_jabatan")
  ) {
    throw new InvariantError("Please provide id_department and nama_jabatan");
  }

  const { id } = req.params;

  const jabatan = await jabatanService.getJabatanById(Number(id));

  if (!jabatan) {
    throw new NotFoundError("Jabatan not found, please put correct id");
  }

  const { id_department, nama_jabatan } = req.body;
  const department = await departmentService.getDepartmentById(
    Number(id_department)
  );

  if (!department) {
    throw new NotFoundError("Department not found, please put correct id");
  }

  await jabatanService.updateJabatan(Number(id), {
    id_department,
    nama_jabatan,
  });
  return res
    .status(200)
    .json({ status: "success", message: "Jabatan updated successfully" });
};

export default updateJabatan;
