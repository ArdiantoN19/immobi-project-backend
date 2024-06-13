import { Request, Response } from "express";
import departmentService from "../../services/DepartmentService";
import InvariantError from "../../exceptions/InvariantError";

const createDepartment = async (req: Request, res: Response) => {
  if (!req.body.hasOwnProperty("nama_department")) {
    throw new InvariantError("Please provide nama_department");
  }

  const { nama_department } = req.body;

  await departmentService.createDepartment({ nama_department });
  return res
    .status(201)
    .json({ status: "success", message: "Department created successfully" });
};

export default createDepartment;
