import { Request, Response } from "express";
import createVehicleService from "../../services/vehicles/createVehicles.service";

export const createVehiclesControllers = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  // const userId = req.user.id;

  const annoucement = await createVehicleService(data);

  return res.status(201).json(annoucement);
};
