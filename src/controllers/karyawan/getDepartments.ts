import { Request, Response } from "express";
import departmentService from "../../services/DepartmentService";

const getDepartments = async (req: Request, res: Response) => {
  const departments = await departmentService.getDepartments();
  return res.status(200).json({ status: "success", data: departments });
};

export default getDepartments;
