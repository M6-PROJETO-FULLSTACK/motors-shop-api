import AppDataSource from "../../data-source";
import { Vehicle } from "../../entities/vehicles.entities";
import { Comment } from "../../entities/comments.entities";
import AppError from "../../errors/appError";
import { User } from "../../entities/users.entities";

const listOneVehicleService = async (id: string) => {
  const vehiclesRepository = AppDataSource.getRepository(Vehicle);
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const vehicles = await vehiclesRepository.find();

  const vehicle = vehicles.find((v) => v.id === id);

  const comments = await commentRepository.find({
    where: {
      vehicle_id: id,
    },
    relations: {
      user: true,
    },
  });

  const user = await userRepository.find({
    where:{
      vehicles:{
        id: id
      }
    }
  })

  const userId = user[0].id

  if (!vehicle) {
    throw new AppError("Vehicle not found.", 404);
  }

  vehicle.comments = comments;

  return {vehicle, userId};
};

export default listOneVehicleService;
