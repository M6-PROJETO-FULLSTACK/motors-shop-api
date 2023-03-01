import { Request, Response } from "express";
import deleteCommentService from "../../services/comments/deleteComment.service";

export const deleteCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;

  await deleteCommentService(id, userId);

  return res.status(204).send();
};
