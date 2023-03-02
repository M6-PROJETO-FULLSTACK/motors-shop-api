import { Router } from "express";

import handleErrorMiddleware from "../middlewares/handleError.middleware";
import listVehiclesController from "../controllers/vehicles/listVehicles.controller";
import listOneVehicleController from "../controllers/vehicles/listOneVehicle.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import updateVehiclesController from "../controllers/vehicles/updateVehicle.controller";
import { createVehiclesControllers } from "../controllers/vehicles/createVehicle.controller";
import { deleteVehicleController } from "../controllers/vehicles/deleteVehicle.controller";

const vehiclesRoutes = Router();

vehiclesRoutes.get("", handleErrorMiddleware, listVehiclesController);
vehiclesRoutes.get("/:id", handleErrorMiddleware, listOneVehicleController);

vehiclesRoutes.post("", ensureAuthMiddleware, createVehiclesControllers);
vehiclesRoutes.delete("/:id", ensureAuthMiddleware, deleteVehicleController);
vehiclesRoutes.patch("/:id", ensureAuthMiddleware, updateVehiclesController);

export default vehiclesRoutes;
