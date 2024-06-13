import express, { Router } from "express";
import { catchAsync } from "../utils";
import getJabatans from "../controllers/jabatan/getJabatans";
import createJabatan from "../controllers/jabatan/createJabatan";
import getJabatanById from "../controllers/jabatan/getJabatanById";
import updateJabatan from "../controllers/jabatan/updateJabatan";
import deleteJabatan from "../controllers/jabatan/deleteJabatan";

const router: Router = express.Router();

router.get("/", catchAsync(getJabatans));
router.post("/", catchAsync(createJabatan));
router.get("/:id", catchAsync(getJabatanById));
router.put("/:id", catchAsync(updateJabatan));
router.delete("/:id", catchAsync(deleteJabatan));

export default router;
