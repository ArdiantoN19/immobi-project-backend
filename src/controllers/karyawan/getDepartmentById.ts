import { Request, Response } from "express";
import departmentService from "../../services/DepartmentService";
import NotFoundError from "../../exceptions/NotFoundError";

const getDepartmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const department = await departmentService.getDepartmentById(Number(id));

  if (!department) {
    throw new NotFoundError("Department not found, please put correct id");
  }

  return res.status(200).json({ status: "success", data: department });
};

export default getDepartmentById;
