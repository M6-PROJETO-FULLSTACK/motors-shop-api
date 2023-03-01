import "reflect-metadata";
import "express-async-errors";
import express from "express";
import vehiclesRoutes from "./routes/vehicles.routes";
import usersRoutes from "./routes/users.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import commentsRoutes from "./routes/comments.routes";
import LoginRoute from "./routes/login.routes";

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/vehicles", vehiclesRoutes);
app.use("/users", usersRoutes);
app.use("/comments", commentsRoutes);
app.use("/login", LoginRoute)

app.use(handleErrorMiddleware);

export default app;
