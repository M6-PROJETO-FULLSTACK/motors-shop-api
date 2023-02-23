import "reflect-metadata";
import "express-async-errors";
import express from "express";
import vehiclesRoutes from "./routes/vehicles.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/vehicles", vehiclesRoutes);

app.use(handleErrorMiddleware);

export default app;
