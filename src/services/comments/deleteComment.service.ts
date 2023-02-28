import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entities";
import AppError from "../../errors/appError";

const deleteCommentService = async (id: string, userId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOneBy({
    id,
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user_id !== userId) {
    throw new AppError("You're not the owner of this post", 401);
  }

  await commentRepository.delete(id);

  return;
};

export default deleteCommentService;
