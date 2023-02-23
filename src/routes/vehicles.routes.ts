import { Router } from "express";
import handleErrorMiddleware from "../middlewares/handleError.middleware";
import listVehiclesController from "../controllers/vehicles/listVehicles.controller";
import listOneVehicleController from "../controllers/vehicles/listOneVehicle.controller";

const vehiclesRoutes = Router();

vehiclesRoutes.get("", handleErrorMiddleware, listVehiclesController);
vehiclesRoutes.get("/:id", handleErrorMiddleware, listOneVehicleController);

export default vehiclesRoutes;
