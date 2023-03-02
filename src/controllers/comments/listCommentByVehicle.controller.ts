import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listCommentsByVehicleService from "../../services/comments/listCommentsByVehicle.service";

const listCommentByVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const comments = await listCommentsByVehicleService(id);

  return res.status(201).json(instanceToPlain(comments));
};

export default listCommentByVehicleController;
