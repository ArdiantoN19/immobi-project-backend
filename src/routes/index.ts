import { Router, Express } from "express";
import departmentRouter from "./department";
import jabatanRouter from "./jabatan";
import karyawanRouter from "./karyawan";

const routes: { path: string; router: Router }[] = [
  {
    path: "departments",
    router: departmentRouter,
  },
  {
    path: "jabatans",
    router: jabatanRouter,
  },
  {
    path: "karyawans",
    router: karyawanRouter,
  },
];

const router = (app: Express) => {
  routes.forEach((route) => {
    app.use(`/api/v1/${route.path}`, route.router);
  });
};

export default router;
