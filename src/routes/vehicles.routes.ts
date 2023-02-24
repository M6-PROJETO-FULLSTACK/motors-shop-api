import { Router } from "express";

import handleErrorMiddleware from "../middlewares/handleError.middleware";
import listVehiclesController from "../controllers/vehicles/listVehicles.controller";
import listOneVehicleController from "../controllers/vehicles/listOneVehicle.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import {
  createVehiclesControllers,
  deleteVehicleController,
} from "../controllers/vehicles.controllers";
import updateVehiclesController from "../controllers/vehicles/updateVehicle.controller";

const vehiclesRoutes = Router();

vehiclesRoutes.get("", handleErrorMiddleware, listVehiclesController);
vehiclesRoutes.get("/:id", handleErrorMiddleware, listOneVehicleController);

vehiclesRoutes.post("", ensureAuthMiddleware, createVehiclesControllers);
vehiclesRoutes.delete("/:id", ensureAuthMiddleware, deleteVehicleController);
vehiclesRoutes.patch("/:id", ensureAuthMiddleware, updateVehiclesController);

export default vehiclesRoutes;
