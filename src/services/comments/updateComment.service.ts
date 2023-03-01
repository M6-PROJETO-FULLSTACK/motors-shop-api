import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entities";
import AppError from "../../errors/appError";
import { ICommentUpdate } from "../../interfaces/Comment";

const updateCommentService = async (
  id: string,
  userId: string,
  { message }: ICommentUpdate
) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    where: { id },
    relations: { user: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user_id !== userId) {
    throw new AppError("You're not the owner of this post", 401);
  }

  await commentRepository.update(id, {
    message,
  });

  const updatedComment = await commentRepository.findOneBy({ id });

  return updatedComment!;
};
export default updateCommentService;
