import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCommentsService from "../../services/comments/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const message = req.body;
  const userId = req.user.id;
  const vehicleId = req.params.id;

  const comment = await createCommentsService(userId, vehicleId, message);

  return res.status(201).json(instanceToPlain(comment));
};

export default createCommentController;
