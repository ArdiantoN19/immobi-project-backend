import { Request, Response } from "express";
import departmentService from "../../services/DepartmentService";
import NotFoundError from "../../exceptions/NotFoundError";
import InvariantError from "../../exceptions/InvariantError";

const updateDepartment = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!req.body.hasOwnProperty("nama_department")) {
    throw new InvariantError("Please provide nama_department");
  }

  const { nama_department } = req.body;
  const department = await departmentService.getDepartmentById(Number(id));

  if (!department) {
    throw new NotFoundError("Department not found, please put correct id");
  }

  await departmentService.updateDepartment(Number(id), { nama_department });
  return res
    .status(200)
    .json({ status: "success", message: "Department updated successfully" });
};

export default updateDepartment;
