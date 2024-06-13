import express, { Router } from "express";
import { catchAsync } from "../utils";
import getDepartments from "../controllers/department/getDepartments";
import getDepartmentById from "../controllers/department/getDepartmentById";
import updateDepartment from "../controllers/department/updateDepartment";
import deleteDepartment from "../controllers/department/deleteDeparment";
import createDepartment from "../controllers/department/createDepartment";

const router: Router = express.Router();

router.get("/", catchAsync(getDepartments));
router.post("/", catchAsync(createDepartment));
router.get("/:id", catchAsync(getDepartmentById));
router.put("/:id", catchAsync(updateDepartment));
router.delete("/:id", catchAsync(deleteDepartment));

export default router;
