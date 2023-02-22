import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import handleErrorMiddleware from "../middlewares/handleError.middleware";
import { listVehiclesController, listOneVehicleController } from "../controllers/vehicles.controllers";

const vehiclesRoutes = Router();

vehiclesRoutes.get("", handleErrorMiddleware, listVehiclesController);
vehiclesRoutes.get("/:id", handleErrorMiddleware, listOneVehicleController);

export default vehiclesRoutes;
