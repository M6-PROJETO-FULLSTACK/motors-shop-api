import { Request, Response } from "express";
import deleteVehicleService from "../../services/vehicles/deleteVehicle.service";

export const deleteVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  await deleteVehicleService(id, userId);

  return res.status(204).send();
};
