import { Router } from "express";
import { createVehiclesControllers } from "../controllers/vehicles.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const vehiclesRoutes = Router();

vehiclesRoutes.post("", createVehiclesControllers);

export default vehiclesRoutes;
