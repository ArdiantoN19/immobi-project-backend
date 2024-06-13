import express, {
  Express,
  Response,
  Request,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import * as dotenv from "dotenv";
import router from "./routes";
import { syncDatabase } from "./models";
import ClientError from "./exceptions/ClientError";

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

// ROUTES
router(app);

// HANDLING ERRORS
app.use(
  (
    error: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json({
        status: "fail",
        message: error.message,
      });
    }

    return res.status(500).json({
      status: "fail",
      message: "Oops, something went wrong",
    });
  }
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, welcome to my server 😊");
});

app.get("/*", (req: Request, res: Response) => {
  return res.status(404).json({
    status: "fail",
    message: "Page not found",
  });
});

const { APP_PORT, APP_HOST } = process.env as Record<string, any>;

// SYNC DATABASE and START SERVER
// syncDatabase()
//   .then(() => {
//     app.listen(APP_PORT, () =>
//       console.log(`Server running on http://${APP_HOST}:${APP_PORT}`)
//     );
//   })
//   .catch((error) => {
//     console.log("Failed to connect to database", error);
//   });

app.listen(APP_PORT, () =>
  console.log(`Server running on http://${APP_HOST}:${APP_PORT}`)
);
