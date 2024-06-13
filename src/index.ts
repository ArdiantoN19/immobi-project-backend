import express, { Express, Response, Request, NextFunction } from "express";
import * as dotenv from "dotenv";
import sequelize from "./utils/database";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, welcome to my server 😊");
});

const { APP_PORT, APP_HOST } = process.env as Record<string, any>;

sequelize
  .sync()
  .then(() => {
    console.log("database connected");
    app.listen(APP_PORT, () =>
      console.log(`Server running on http://${APP_HOST}:${APP_PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
