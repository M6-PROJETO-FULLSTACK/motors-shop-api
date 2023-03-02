import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entities";

const listCommentsByVehicleService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = await commentRepository.find({
    where: {
      vehicle_id: id,
    },
    relations:{
      user: true
    }
  });

  return comments;
};

export default listCommentsByVehicleService;
