import express, { Router } from "express";
import { catchAsync } from "../utils";
import getKaryawans from "../controllers/karyawan/getKaryawans";
import createKaryawan from "../controllers/karyawan/createKaryawan";
import getKaryawanById from "../controllers/karyawan/getKaryawanById";
import updateKaryawan from "../controllers/karyawan/updateKaryawan";
import deleteKaryawan from "../controllers/karyawan/deleteKaryawan";

const router: Router = express.Router();

router.get("/", catchAsync(getKaryawans));
router.post("/", catchAsync(createKaryawan));
router.get("/:id", catchAsync(getKaryawanById));
router.put("/:id", catchAsync(updateKaryawan));
router.delete("/:id", catchAsync(deleteKaryawan));

export default router;
