import "reflect-metadata";
import "express-async-errors";
import express from "express";
import vehiclesRoutes from "./routes/vehicles.routes";
import usersRoutes from "./routes/users.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";


const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.use("/vehicles", vehiclesRoutes);
app.use("/users", usersRoutes);

app.use(handleErrorMiddleware);

export default app;
