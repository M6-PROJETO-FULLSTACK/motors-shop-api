import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listOneVehicleService from "../../services/vehicles/listOneVehicle.service";

const listOneVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await listOneVehicleService(id);

  return res.json(instanceToPlain(vehicle));
};
export default listOneVehicleController;
