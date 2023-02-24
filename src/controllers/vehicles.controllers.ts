import { Request, Response } from "express";
import createVehicleService from "../services/vehicles/createVehicles.service";
import deleteVehicleService from "../services/vehicles/deleteVehicle.service";

export const createVehiclesControllers = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  // const userId = req.user.id;

  const annoucement = await createVehicleService(data);

  return res.status(201).json(annoucement);
};

export const deleteVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  await deleteVehicleService(id, userId);

  return res.status(204).send();
};
