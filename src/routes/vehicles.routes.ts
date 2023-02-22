import { Router } from "express";
import {
  createVehiclesControllers,
  deleteVehicleController,
} from "../controllers/vehicles.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const vehiclesRoutes = Router();

vehiclesRoutes.post("", ensureAuthMiddleware, createVehiclesControllers);
vehiclesRoutes.delete("/:id", ensureAuthMiddleware, deleteVehicleController);

export default vehiclesRoutes;
