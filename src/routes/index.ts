import { Router, Express } from "express";
import departmentRouter from "./department";

const routes: { path: string; router: Router }[] = [
  {
    path: "/departments",
    router: departmentRouter,
  },
];

const router = (app: Express) => {
  routes.forEach((route) => {
    app.use(`/api/v1${route.path}`, route.router);
  });
};

export default router;
