import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comments.entities";
import { Vehicle } from "../../entities/vehicles.entities";
import { User } from "../../entities/users.entities";
import AppError from "../../errors/appError";
import { ICommentRequest } from "../../interfaces/Comment";

const createCommentsService = async (
  userId: string,
  vehicleId: string,
  { message }: ICommentRequest
) => {
  const commentsRepository = AppDataSource.getRepository(Comment);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const findVehicle = await vehicleRepository.findOneBy({
    id: vehicleId,
  });

  if (!findVehicle) {
    throw new AppError("Vehicle not found", 404);
  }

  const newComment = commentsRepository.create({
    message,
    vehicle_id: vehicleId,
    user_id: userId,
    user: findUser!,
  });

  await commentsRepository.save(newComment);

  return newComment;
};

export default createCommentsService;
