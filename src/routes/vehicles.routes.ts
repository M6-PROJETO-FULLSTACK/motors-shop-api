import { Router } from "express";
import {
  createVehiclesControllers,
  deleteVehicleController,
} from "../controllers/vehicles.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const vehiclesRoutes = Router();

vehiclesRoutes.post("", createVehiclesControllers);
vehiclesRoutes.delete("/:id", deleteVehicleController);

export default vehiclesRoutes;
