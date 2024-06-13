import { Request, Response } from "express";
import InvariantError from "../../exceptions/InvariantError";
import jabatanService from "../../services/JabatanService";
import NotFoundError from "../../exceptions/NotFoundError";
import departmentService from "../../services/DepartmentService";

const createJabatan = async (req: Request, res: Response) => {
  if (
    !req.body.hasOwnProperty("id_department") ||
    !req.body.hasOwnProperty("nama_jabatan")
  ) {
    throw new InvariantError("Please provide id_department and nama_jabatan");
  }

  const { id_department, nama_jabatan } = req.body;
  const department = await departmentService.getDepartmentById(
    Number(id_department)
  );

  if (!department) {
    throw new NotFoundError("Department not found, please put correct id");
  }

  await jabatanService.createJabatan({ id_department, nama_jabatan });
  return res
    .status(201)
    .json({ status: "success", message: "Jabatan created successfully" });
};

export default createJabatan;
