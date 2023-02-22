import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import vehiclesRoutes from "./routes/vehicles.routes";

const app = express();
app.use(express.json());

app.use("/vehicles", vehiclesRoutes);

app.use(handleErrorMiddleware);

export default app;
