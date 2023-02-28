import { Request, Response } from "express";
import updateCommentsService from "../../services/comments/updateComment.service";

export const updateCommentsController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const userId = req.user.id;

  const updateComment = await updateCommentsService(id, userId, data);

  return res.json({
    data: updateComment,
  });
};
